// Module ID: 1952
// Function ID: 1953
// Name: schedule
// Dependencies: [2]

// Module 1952 (schedule)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/dismissible_content/TaskRunner.tsx");
class TaskRunner {
}
const prototype = TaskRunner.prototype;
prototype["schedule"] = function schedule(arg0, arg1) {
  const self = this;
  closure_0 = arg0;
  this.unschedule();
  this.timeoutId = setTimeout(() => {
    self.timeoutId = null;
    callback();
  }, arg1);
};
prototype["unschedule"] = function unschedule() {
  const self = this;
  if (this.scheduled()) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.timeoutId);
    self.timeoutId = null;
  }
};
prototype["scheduled"] = function scheduled() {
  return null !== this.timeoutId;
};

export { TaskRunner };
