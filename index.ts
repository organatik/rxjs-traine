import { Observable } from 'rxjs';

const sequence$ = new Observable((subscriber) => {
  let count = 1;

  const intervalId = setInterval(() => {
    if (count === 5) {
      clearInterval(intervalId);
      subscriber.complete();
      return;
    }
    subscriber.next(count++);
  }, 5000);
});

sequence$.subscribe(
  (v) => console.log(v),
  (error) => {},
  () => {
    console.log('complete');
  },
);
