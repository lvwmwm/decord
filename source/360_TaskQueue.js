// Module ID: 360
// Function ID: 5337
// Name: TaskQueue
// Dependencies: [6, 7, 44]

// Module 360 (TaskQueue)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;

export default (() => {
  class TaskQueue {
    constructor(arg0) {
      tmp = outer1_2(this, TaskQueue);
      this._onMoreTasks = arg0.onMoreTasks;
      items = [];
      items[0] = { tasks: [], popable: false };
      this._queueStack = items;
      return;
    }
  }
  let obj = {
    key: "enqueue",
    value: function enqueue(arg0) {
      this._getCurrentQueue().push(arg0);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "enqueueTasks",
    value: function enqueueTasks(closure_1) {
      const self = this;
      const item = closure_1.forEach((arg0) => self.enqueue(arg0));
    }
  };
  items[1] = obj;
  obj = {
    key: "cancelTasks",
    value: function cancelTasks(closure_1) {
      let closure_0 = closure_1;
      const _queueStack = this._queueStack;
      const mapped = _queueStack.map((tasks) => {
        tasks = tasks.tasks;
        return Object.assign({}, tasks, { tasks: tasks.filter((arg0) => -1 === outer1_0.indexOf(arg0)) });
      });
      this._queueStack = mapped.filter((tasks) => {
        let tmp = tasks.tasks.length > 0;
        if (!tmp) {
          tmp = 0 === arg1;
        }
        return tmp;
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasTasksToProcess",
    value: function hasTasksToProcess() {
      return this._getCurrentQueue().length > 0;
    }
  };
  items[4] = {
    key: "processNext",
    value: function processNext() {
      const self = this;
      const _getCurrentQueueResult = this._getCurrentQueue();
      if (_getCurrentQueueResult.length) {
        const arr = _getCurrentQueueResult.shift();
        if ("object" === typeof arr) {
          if (arr.gen) {
            self._genPromise(arr);
          }
        }
        if ("object" === typeof arr) {
          if (arr.run) {
            arr.run();
          }
        }
        const _JSON = JSON;
        TaskQueue(outer1_1[2])("function" === typeof arr, `Expected Function, SimpleTask, or PromiseTask, but got:
      ${JSON.stringify(obj, null, 2)}`);
        arr();
        const tmp8 = TaskQueue(outer1_1[2]);
      }
    }
  };
  items[5] = {
    key: "_getCurrentQueue",
    value: function _getCurrentQueue() {
      const self = this;
      if (this._queueStack[this._queueStack.length - 1].popable) {
        if (0 === tmp.tasks.length) {
          if (self._queueStack.length > 1) {
            const _queueStack = self._queueStack;
            _queueStack.pop();
            let tasks = self._getCurrentQueue();
          }
          return tasks;
        }
      }
      tasks = tmp.tasks;
    }
  };
  items[6] = {
    key: "_genPromise",
    value: function _genPromise(arr) {
      let closure_0 = arr;
      const self = this;
      const _queueStack = this._queueStack;
      _queueStack.push({ tasks: [], popable: false });
      let _classCallCheck = this._queueStack[this._queueStack.length - 1];
      const genResult = arr.gen();
      arr.gen().then(() => {
        _classCallCheck.popable = true;
        if (self.hasTasksToProcess()) {
          self._onMoreTasks();
        }
      }).catch((arg0) => {
        let closure_0 = arg0;
        const timerId = setTimeout(() => {
          closure_0.message = "TaskQueue: Error resolving Promise in task " + closure_0.name + ": " + closure_0.message;
          throw closure_0;
        }, 0);
      });
    }
  };
  return callback(TaskQueue, items);
})();
