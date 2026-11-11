// Module ID: 9804
// Function ID: 9805
// Dependencies: [9758, 9745, 9731]
// Exports: addBreadcrumb

// Module 9804
import _mod9731 from "module_9731" /* 9731 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 9745 */;
import _mod9758 from "module_9758" /* 9758 */;


export function addBreadcrumb(arg0, arg1) {
  let tmpResult;
  let closure_0 = arg1;
  const obj = _mod9758;
  const client = obj.getClient();
  const obj3 = _mod9758;
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
      tmpResult = _browserPerformanceTimeOriginMode;
      const merged = Object.assign(arg0);
      if (tmp5) {
        const tmpResult2 = _mod9731;
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
}
