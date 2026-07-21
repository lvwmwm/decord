// Module ID: 4336
// Function ID: 38266
// Name: ModalDispatchQueue
// Dependencies: []

// Module 4336 (ModalDispatchQueue)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let tmp2 = () => {
  class ModalDispatchQueue {
    constructor() {
      tmp = ModalDispatchQueue(this, ModalDispatchQueue);
      this.queue = [];
      return;
    }
  }
  let closure_0 = ModalDispatchQueue;
  let obj = {
    key: "enqueue",
    value(arg0) {
      const queue = this.queue;
      queue.push(arg0);
    }
  };
  const items = [obj, ];
  obj = {
    key: "flush",
    value() {
      const self = this;
      if (this.queue.length > 0) {
        do {
          let queue = self.queue;
          let arr = queue.shift();
          if (null != arr) {
            let arrResult = arr();
          }
        } while (self.queue.length > 0);
      }
    }
  };
  items[1] = obj;
  return callback(ModalDispatchQueue, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx");

export default tmp2;
