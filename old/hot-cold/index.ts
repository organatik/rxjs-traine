import { interval, Observable } from 'rxjs';

// COLD OBSERVABLE
// const sequence$ = interval(1000);
// const sub1 = sequence$.subscribe((v) => {
//   console.log('sub 1', v);
// });

// setTimeout(() => {
//   sequence$.subscribe((v) => {
//     console.log('sub 2', v);
//   });
// }, 5000);

// HOT OBSERVABLE
const socket: WebSocket = new WebSocket('wss://echo.websocket.org');
const socketSequence$ = new Observable((subscriber) => {
  socket.addEventListener('message', (e) => {
    subscriber.next(e.data);
  });
});

const sub1 = socketSequence$.subscribe((v) => {
  console.log('Sub 1', v);
});

socket.addEventListener('open', () => {
  let count = 1;
  const intervalId = setInterval(() => {
    socket.send((count++).toString());
  }, 1000);
});

setTimeout(() => {
  socketSequence$.subscribe((v) => {
    console.log('Sub 2', v);
  });
}, 5000);
