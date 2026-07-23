// Module ID: 7082
// Function ID: 56692
// Name: UploaderQueue
// Dependencies: [5, 6, 7, 3, 2]

// Module 7082 (UploaderQueue)
import asyncGeneratorStep from "asyncGeneratorStep";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import importDefaultResult from "timestamp";

importDefaultResult = new importDefaultResult("UploaderQueue.tsx");
let tmp4 = (() => {
  class UploaderQueue {
    constructor() {
      tmp = UploaderQueue(this, UploaderQueue);
      this.queue = [];
      this.drainingQueue = false;
      return;
    }
  }
  let obj = {
    key: "enqueue",
    value(arg0) {
      const self = this;
      const queue = this.queue;
      queue.unshift(arg0);
      let str = "no";
      if (this.drainingQueue) {
        str = "yes";
      }
      outer1_3.log(`enqueue() - alreadying draining? ${str}`);
      if (!self.drainingQueue) {
        self.drainQueue();
      }
    }
  };
  const items = [obj, ];
  obj = { key: "drainQueue" };
  callback = callback(async function() {
    const self = this;
    let c0;
    self.drainingQueue = true;
    outer2_3.log("drainQueue() - starting, queue length: " + self.queue.length);
    const queue = self.queue;
    const arr = queue.pop();
    if (null == arr) {
      outer2_3.log("drainQueue() - No uploads left, setting drainingQueue to false");
      self.drainingQueue = false;
    } else {
      outer2_3.log("drainQueue() - start uploader");
      const arrResult = arr();
      c0 = arrResult;
      yield new Promise((arg0) => {
        const _undefined = arg0;
        let _errored = _undefined._aborted;
        if (!_errored) {
          _errored = _undefined._errored;
        }
        if (_errored) {
          arg0();
        }
        _undefined.addListener("complete", () => callback());
        _undefined.addListener("error", () => callback());
      });
      const _HermesInternal = HermesInternal;
      outer2_3.log("drainQueue() Uploader complete - " + arrResult.id);
      self.drainQueue();
    }
  });
  obj.value = function drainQueue() {
    return callback(...arguments);
  };
  items[1] = obj;
  return callback2(UploaderQueue, items);
})();
tmp4 = new tmp4();
const result = require("_defineProperties").fileFinishedImporting("lib/uploader/UploaderQueue.tsx");

export default tmp4;
