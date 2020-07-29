// class CustomIterator {
//   private cursor = 0;
//   private value!: number;

//   constructor(private array: number[], private divisior: number = 1) {}

//   next() {
//     while (this.cursor < this.array.length) {
//       this.value = this.array[this.cursor++];
//       if (this.value % this.divisior === 0) {
//         return { dome: false, value: this.value };
//       }
//     }
//     return { done: true, value: this.value };
//   }

//   [Symbol.iterator]() {
//     return {
//       next: this.next.bind(this),
//     };
//   }
// }

// const consumer = new CustomIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());

// for (let value of consumer) {
//   console.log(value);
// }

// Array.from(consumer).forEach((v) => console.log(v));

interface IListener {
  next(message: string): void;
}

class Producer {
  private listeners: IListener[] = [];

  public subscribe(listener: IListener) {
    const index = this.listeners.push(listener);

    return {
      unsubscribe: () => {
        this.listeners.splice(index - 1, 1);
      },
    };
  }

  public notify(messages: string) {
    this.listeners.forEach((listener) => {
      listener.next(messages);
    });
  }
}

const listener1: IListener = {
  next(message) {
    console.log('Listener1', message);
  },
};

const listener2: IListener = {
  next(message) {
    console.log('Listener2', message);
  },
};

const notifier = new Producer();

const sub1 = notifier.subscribe(listener1);
const sub2 = notifier.subscribe(listener2);

notifier.notify('Hi all RxJs is awesome');

sub1.unsubscribe();

setTimeout(() => {
  notifier.notify('After one sub unsubscribe');
}, 5000);
