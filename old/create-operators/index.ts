import { of, from, iif, defer } from 'rxjs';
import { map, buffer } from 'rxjs/operators';
import fs from 'fs';
import path from 'path';
import util from 'util';

// const sequence$ = of(1, 2, 3, 4);

// sequence$.subscribe((v) => {
//   console.log('sub 1', v);
// });

// setTimeout(() => {
//   sequence$.subscribe((v) => {
//     console.log('sub 2', v);
//   });
// }, 3000);

// const sequenceFromPromise$ = from(
//   fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
// );

// sequenceFromPromise$.subscribe((value) => {
//   console.log(value);
// });

// const random = Math.round(Math.random() * 10);
// const sequenceIf$ = iif(
//   () => {
//     return random > 5;
//   },
//   of('Value > 5', random),
//   of('Value < 5', random),
// );

// sequenceIf$.subscribe((v) => {
//   console.log(v);
// });

// const src1 = of(new Date()); //создание Observable
// const src2 = defer(() => of(new Date())); //Observable будет создан с вызовом subscribe()

// console.log(src1);
// console.log(src2);

// src1.subscribe((vl) => console.log(vl));
// src2.subscribe((vl) => console.log(vl));
// console.log(src2);

// const promisifiedFileRead = util.promisify(fs.readFile);
// const readdir$ = from(
//   promisifiedFileRead(path.resolve(__dirname, 'text')),
// ).pipe(
//   map((buffer) => {
//     const string = buffer.toString();
//     const regExp = />([^<]+)</;
//     const matches = regExp.exec(string);
//     return matches && matches[1];
//   }),
// );

// readdir$.subscribe((val) => {
//   console.log(val);
// });
