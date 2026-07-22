// Module ID: 7073
// Function ID: 56574
// Name: Queue
// Dependencies: []

// Module 7073 (Queue)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("Queue");
const tmp4 = () => {
  class Queue {
    constructor() {
      tmp = arg0;
      num = arg1;
      self = this;
      if (arg0 === undefined) {
        tmp = closure_4;
      }
      if (num === undefined) {
        num = 100;
      }
      tmp2 = closure_2(self, Queue);
      self.logger = tmp;
      self.defaultRetryAfter = num;
      tmp3 = Queue(closure_1[3]);
      tmp3 = new tmp3();
      self.queue = tmp3;
      self.timeout = null;
      self.draining = false;
      return;
    }
  }
  const importDefault = Queue;
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
      let logId;
      const self = this;
      const Queue = this;
      if (null === this.timeout) {
        if (0 !== self.queue.length) {
          if (true !== self.draining) {
            self.draining = true;
            const queue = self.queue;
            const arr = queue.shift();
            ({ success: closure_2, logId } = arr);
            const logger = self.logger;
            const _HermesInternal = HermesInternal;
            logger.log("Draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
            self.drain(arr.message, (retryAfter) => {
              const logger = self.logger;
              logger.log("Finished draining message from queue LogId:" + logId + " QueueLength: " + self.queue.length);
              self.draining = false;
              if (null == retryAfter) {
                const _setImmediate = setImmediate;
                setImmediate(() => closure_0._drainIfNecessary());
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
                  const queue = closure_0.queue;
                  queue.unshift(closure_1);
                  closure_0.timeout = null;
                  closure_0._drainIfNecessary();
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
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("utils/Queue.tsx");

export default tmp4;
