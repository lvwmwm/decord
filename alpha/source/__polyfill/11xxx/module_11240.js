// Module ID: 11240
// Function ID: 11241
// Dependencies: [11194, 11181, 11167]
// Exports: addBreadcrumb

// Module 11240
import _mod11167 from "module_11167" /* 11167 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11181 */;
import _mod11194 from "module_11194" /* 11194 */;


export const addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  let tmpResult;
  let closure_0 = arg1;
  const obj = _mod11194;
  const client = obj.getClient();
  const obj3 = _mod11194;
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
        const tmpResult2 = _mod11167;
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
