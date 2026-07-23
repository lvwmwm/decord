// Module ID: 16101
// Function ID: 124819
// Name: PriorityQueue
// Dependencies: [6, 7, 16102]

// Module 16101 (PriorityQueue)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export default (() => {
  class PriorityQueue {
    constructor() {
      tmp = outer1_2(this, PriorityQueue);
      this._queue = [];
      return;
    }
  }
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
      _queue1.splice(PriorityQueue(outer1_1[2]).default(self._queue, obj, (priority, priority2) => priority2.priority - priority.priority), 0, obj);
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
      let closure_0 = arg0;
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
  return _defineProperties(PriorityQueue, items);
})();
