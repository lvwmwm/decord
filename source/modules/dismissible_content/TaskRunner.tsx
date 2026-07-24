// Module ID: 1343
// Function ID: 15819
// Name: TaskRunner
// Dependencies: [6, 7, 2]

// Module 1343 (TaskRunner)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class TaskRunner {
    constructor() {
      tmp = TaskRunner(this, TaskRunner);
      this.timeoutId = null;
      return;
    }
  }
  let obj = {
    key: "schedule",
    value(arg0, arg1) {
      const self = this;
      let _defineProperties = arg0;
      this.unschedule();
      this.timeoutId = setTimeout(() => {
        self.timeoutId = null;
        callback();
      }, arg1);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "unschedule",
    value() {
      const self = this;
      if (this.scheduled()) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.timeoutId);
        self.timeoutId = null;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "scheduled",
    value() {
      return null !== this.timeoutId;
    }
  };
  items[2] = obj;
  return callback(TaskRunner, items);
})();
const result = require("set").fileFinishedImporting("modules/dismissible_content/TaskRunner.tsx");

export const TaskRunner = tmp2;
