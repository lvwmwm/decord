// Module ID: 1343
// Function ID: 15817
// Name: TaskRunner
// Dependencies: []

// Module 1343 (TaskRunner)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class TaskRunner {
    constructor() {
      tmp = TaskRunner(this, TaskRunner);
      this.timeoutId = null;
      return;
    }
  }
  let closure_0 = TaskRunner;
  let obj = {
    key: "schedule",
    value(arg0, arg1) {
      const TaskRunner = this;
      this.unschedule();
      this.timeoutId = setTimeout(() => {
        self.timeoutId = null;
        arg0();
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
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/dismissible_content/TaskRunner.tsx");

export const TaskRunner = tmp2;
