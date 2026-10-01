// Module ID: 773
// Function ID: 774
// Dependencies: [713, 703, 689]
// Exports: addBreadcrumb

// Module 773
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 689 */;
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 703 */;
import _mod713 from "module_713" /* 713 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  let tmpResult;
  let closure_0 = arg1;
  const obj = _mod713;
  const client = obj.getClient();
  const obj3 = _mod713;
  const isolationScope = obj3.getIsolationScope();
  if (client) {
    const options = client.getOptions();
    let beforeBreadcrumb = options.beforeBreadcrumb;
    let tmp5 = null;
    if (undefined !== beforeBreadcrumb) {
      tmp5 = beforeBreadcrumb;
    }
    beforeBreadcrumb = tmp5;
    const maxBreadcrumbs = options.maxBreadcrumbs;
    let num = 100;
    if (undefined !== maxBreadcrumbs) {
      num = maxBreadcrumbs;
    }
    if (num > 0) {
      let obj2 = { timestamp: tmpResult.dateTimestampInSeconds() };
      tmpResult = browserPerformanceTimeOrigin;
      const merged = Object.assign(arg0);
      if (tmp5) {
        const tmpResult2 = CONSOLE_LEVELS;
        obj2 = tmpResult2.consoleSandbox(() => beforeBreadcrumb(obj2, closure_0));
      }
      if (null !== obj2) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", obj2, arg1);
        }
        isolationScope.addBreadcrumb(obj2, num);
      }
    }
  }
};
