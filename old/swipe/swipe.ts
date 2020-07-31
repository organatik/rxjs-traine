import { fromEvent, Observable, zip, merge } from 'rxjs';
import { pluck, map, tap } from 'rxjs/operators';

const touchStart = getX(
  fromEvent<TouchEvent>(document, 'touchstart'),
  fromEvent<MouseEvent>(document, 'mousedown'),
);
const touchEnd = getX(
  fromEvent<TouchEvent>(document, 'touchend'),
  fromEvent<MouseEvent>(document, 'mouseup'),
);

function getX(
  source1$: Observable<TouchEvent>,
  source2$: Observable<MouseEvent>,
) {
  return merge(source1$, source2$).pipe(
    map((event: TouchEvent | MouseEvent) => {
      if (event instanceof TouchEvent) {
        return event.changedTouches[0].clientX;
      }
      return event.clientX;
    }),
  );
}

function swipe(source$: Observable<[number, number]>) {
  return source$.pipe(map(([x, y]) => x - y));
}

const combinateStartEndTouch = zip(touchStart, touchEnd);

swipe(combinateStartEndTouch).subscribe((direction) => {
  if (direction > 0) {
    console.log('Previus img');
  } else {
    console.log('Next img');
  }
});
