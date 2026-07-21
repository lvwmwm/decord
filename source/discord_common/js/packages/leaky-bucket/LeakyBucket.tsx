// Module ID: 10492
// Function ID: 81905
// Name: LeakyBucket
// Dependencies: []

// Module 10492 (LeakyBucket)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class LeakyBucket {
    constructor(arg0, arg1) {
      tmp = LeakyBucket(this, LeakyBucket);
      this._capacity = arg0;
      this._tokenCount = arg0;
      this._queue = [];
      this._intervalPeriod = arg1 / arg0;
      this._intervalID = null;
      return;
    }
  }
  let closure_0 = LeakyBucket;
  let obj = {
    key: "_processQueue",
    value() {
      const LeakyBucket = this;
      const timerId = setTimeout(() => {
        if (self._queue.length > 0) {
          if (self._tokenCount > 0) {
            self._tokenCount = self._tokenCount - 1;
            if (null == self._intervalID) {
              const _setInterval = setInterval;
              self._intervalID = setInterval(() => closure_0._iterate(), self._intervalPeriod);
            }
            const _queue = self._queue;
            const arr = _queue.shift();
            if (null != arr) {
              arr.resolve();
            }
            self._processQueue();
          }
        }
      }, 0);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_iterate",
    value() {
      const self = this;
      this._tokenCount = Math.min(this._capacity, this._tokenCount + 1);
      let tmp = this._tokenCount >= this._capacity;
      if (tmp) {
        tmp = null != self._intervalID;
      }
      if (tmp) {
        const _clearInterval = clearInterval;
        clearInterval(self._intervalID);
        self._intervalID = null;
      }
      self._processQueue();
    }
  };
  items[1] = obj;
  obj = {
    key: "process",
    value(arg0) {
      const LeakyBucket = this;
      return new Promise((resolve) => {
        const self = arg1;
        if (null != resolve) {
          if (resolve.aborted) {
            const _Error = Error;
            const error = new Error("Already aborted");
            arg1(error);
          }
        }
        let obj = { resolve, signal: resolve };
        resolve = obj;
        const _queue = self._queue;
        _queue.push(obj);
        if (resolve) {
          obj = { once: true };
          const listener = resolve.addEventListener("abort", () => {
            const _queue = arg1._queue;
            const index = _queue.indexOf(obj);
            if (index >= 0) {
              const _queue1 = arg1._queue;
              _queue1.splice(index, 1);
            }
            const error = new Error("Aborted");
            arg1(error);
          }, obj);
        }
        self._processQueue();
      });
    }
  };
  items[2] = obj;
  return callback(LeakyBucket, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx");

export default tmp2;
