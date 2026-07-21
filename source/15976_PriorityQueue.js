// Module ID: 15976
// Function ID: 122604
// Name: PriorityQueue
// Dependencies: []

// Module 15976 (PriorityQueue)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);

export default () => {
  class PriorityQueue {
    constructor() {
      tmp = closure_2(this, PriorityQueue);
      this._queue = [];
      return;
    }
  }
  const require = PriorityQueue;
  let obj = {
    key: "enqueue",
    value: function enqueue(run) {
      const self = this;
      const obj = {};
      const merged = Object.assign({ priority: 0 }, arg1);
      obj.priority = merged.priority;
      obj.run = run;
      if (this.size) {
        if (self._queue[self.size - 1].priority >= merged.priority) {
          const _queue = self._queue;
          _queue.push(obj);
        }
      }
      const _queue1 = self._queue;
      _queue1.splice(PriorityQueue(closure_1[2]).default(self._queue, obj, (priority, priority2) => priority2.priority - priority.priority), 0, obj);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "dequeue",
    value: function dequeue() {
      const _queue = this._queue;
      const arr = _queue.shift();
      let run;
      if (null != arr) {
        run = arr.run;
      }
      return run;
    }
  };
  items[1] = obj;
  obj = {
    key: "filter",
    value: function filter(arg0) {
      const PriorityQueue = arg0;
      const _queue = this._queue;
      const found = _queue.filter((priority) => priority.priority === priority.priority);
      return found.map((run) => run.run);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "size",
    get() {
      return this._queue.length;
    }
  };
  return callback(PriorityQueue, items);
}();
