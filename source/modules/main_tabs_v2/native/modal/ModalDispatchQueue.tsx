// Module ID: 4340
// Function ID: 38306
// Name: ModalDispatchQueue
// Dependencies: [6, 7, 2]

// Module 4340 (ModalDispatchQueue)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let tmp2 = (() => {
  class ModalDispatchQueue {
    constructor() {
      tmp = ModalDispatchQueue(this, ModalDispatchQueue);
      this.queue = [];
      return;
    }
  }
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
})();
tmp2 = new tmp2();
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx");

export default tmp2;
