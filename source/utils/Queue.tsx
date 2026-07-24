// Module ID: 7077
// Function ID: 56617
// Name: Queue
// Dependencies: [6, 7, 3, 13, 2]

// Module 7077 (Queue)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import importDefaultResult from "arrayCopy";

importDefaultResult = new importDefaultResult("Queue");
const tmp4 = (() => {
  class Queue {
    constructor() {
      tmp = arg0;
      num = arg1;
      self = this;
      if (arg0 === undefined) {
        tmp = outer1_4;
      }
      if (num === undefined) {
        num = 100;
      }
      tmp2 = outer1_2(self, Queue);
      self.logger = tmp;
      self.defaultRetryAfter = num;
      tmp3 = Queue(outer1_1[3]);
      tmp3 = new tmp3();
      self.queue = tmp3;
      self.timeout = null;
      self.draining = false;
      return;
    }
  }
  let obj = {
    key: "enqueue",
    value(message, success, logId) {
      const queue = this.queue;
      queue.push({ message, success, logId });
      this._drainIfNecessary();
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "length",
    get() {
      return this.queue.length;
    }
  };
  items[1] = obj;
  obj = {
    key: "_drainIfNecessary",
    value() {
      let _classCallCheck;
      let logId;
      let self = this;
      self = this;
      if (null === this.timeout) {
        if (0 !== self.queue.length) {
          if (true !== self.draining) {
            self.draining = true;
            let queue = self.queue;
            const arr = queue.shift();
            ({ success: _classCallCheck, logId } = arr);
            let logger = self.logger;
            let _HermesInternal = HermesInternal;
            logger.log("Draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
            self.drain(arr.message, (retryAfter) => {
              const logger = self.logger;
              logger.log("Finished draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
              self.draining = false;
              if (null == retryAfter) {
                const _setImmediate = setImmediate;
                setImmediate(() => outer1_0._drainIfNecessary());
                callback(arg1);
              } else {
                let defaultRetryAfter = retryAfter.retryAfter;
                if (null == defaultRetryAfter) {
                  defaultRetryAfter = self.defaultRetryAfter;
                }
                const logger2 = self.logger;
                const _HermesInternal = HermesInternal;
                logger2.info("Rate limited. Delaying draining of queue for " + defaultRetryAfter + " ms. LogId:" + logId + " QueueLength: " + self.queue.length);
                const _setTimeout = setTimeout;
                self.timeout = setTimeout(() => {
                  const queue = outer1_0.queue;
                  queue.unshift(outer1_1);
                  outer1_0.timeout = null;
                  outer1_0._drainIfNecessary();
                }, defaultRetryAfter);
              }
            });
          }
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clear",
    value() {
      const queue = this.queue;
      queue.clear();
      clearTimeout(this.timeout);
      this.timeout = null;
      this.draining = false;
    }
  };
  return callback(Queue, items);
})();
const result = require("timestamp").fileFinishedImporting("utils/Queue.tsx");

export default tmp4;
