// Module ID: 7072
// Function ID: 56624
// Name: UploaderQueue
// Dependencies: []

// Module 7072 (UploaderQueue)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("UploaderQueue.tsx");
let tmp4 = () => {
  class UploaderQueue {
    constructor() {
      tmp = UploaderQueue(this, UploaderQueue);
      this.queue = [];
      this.drainingQueue = false;
      return;
    }
  }
  let closure_1 = UploaderQueue;
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
      closure_3.log(`enqueue() - alreadying draining? ${str}`);
      if (!self.drainingQueue) {
        self.drainQueue();
      }
    }
  };
  const items = [obj, ];
  obj = { key: "drainQueue" };
  const callback = callback(async function() {
    const self = this;
    let arrResult;
    self.drainingQueue = true;
    closure_3.log("drainQueue() - starting, queue length: " + self.queue.length);
    const queue = self.queue;
    const arr = queue.pop();
    if (null == arr) {
      closure_3.log("drainQueue() - No uploads left, setting drainingQueue to false");
      self.drainingQueue = false;
    } else {
      closure_3.log("drainQueue() - start uploader");
      arrResult = arr();
      yield new Promise((arg0) => {
        let _errored = arrResult._aborted;
        if (!_errored) {
          _errored = arrResult._errored;
        }
        if (_errored) {
          arg0();
        }
        arg0.addListener("complete", () => arg0());
        arg0.addListener("error", () => arg0());
      });
      const _HermesInternal = HermesInternal;
      closure_3.log("drainQueue() Uploader complete - " + arrResult.id);
      self.drainQueue();
    }
  });
  obj.value = function drainQueue() {
    return callback(...arguments);
  };
  items[1] = obj;
  return callback2(UploaderQueue, items);
}();
tmp4 = new tmp4();
const result = arg1(dependencyMap[4]).fileFinishedImporting("lib/uploader/UploaderQueue.tsx");

export default tmp4;
