// Module ID: 360
// Function ID: 5337
// Name: TaskQueue
// Dependencies: []

// Module 360 (TaskQueue)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export default () => {
  class TaskQueue {
    constructor(arg0) {
      tmp = closure_2(this, TaskQueue);
      this._onMoreTasks = arg0.onMoreTasks;
      items = [];
      items[0] = { tasks: [], popable: false };
      this._queueStack = items;
      return;
    }
  }
  const arg1 = TaskQueue;
  let obj = {
    key: "enqueue",
    value: function enqueue(arg0) {
      this._getCurrentQueue().push(arg0);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "enqueueTasks",
    value: function enqueueTasks(closure_1) {
      const TaskQueue = this;
      const item = closure_1.forEach((arg0) => self.enqueue(arg0));
    }
  };
  items[1] = obj;
  obj = {
    key: "cancelTasks",
    value: function cancelTasks(closure_1) {
      const TaskQueue = closure_1;
      const _queueStack = this._queueStack;
      const mapped = _queueStack.map((tasks) => {
        tasks = tasks.tasks;
        return Object.assign({}, tasks, { tasks: tasks.filter((arg0) => -1 === closure_0.indexOf(arg0)) });
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
        TaskQueue(closure_1[2])("function" === typeof arr, `Expected Function, SimpleTask, or PromiseTask, but got:
      ${JSON.stringify(obj, null, 2)}`);
        arr();
        const tmp8 = TaskQueue(closure_1[2]);
      }
    }
  };
  items[5] = {
    key: "_getCurrentQueue",
    value: function _getCurrentQueue() {
      const self = this;
      const tmp = this._queueStack[this._queueStack.length - 1];
      if (tmp.popable) {
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
      const TaskQueue = arr;
      const self = this;
      const _queueStack = this._queueStack;
      _queueStack.push({ tasks: [], popable: false });
      let closure_2 = this._queueStack[this._queueStack.length - 1];
      const genResult = arr.gen();
      arr.gen().then(() => {
        closure_2.popable = true;
        if (self.hasTasksToProcess()) {
          self._onMoreTasks();
        }
      }).catch((arg0) => {
        const timerId = setTimeout((self) => {
          self.message = "TaskQueue: Error resolving Promise in task " + self.name + ": " + self.message;
          throw self;
        }, 0);
      });
    }
  };
  return callback(TaskQueue, items);
}();
