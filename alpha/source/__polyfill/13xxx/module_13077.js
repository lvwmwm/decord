// Module ID: 13077
// Function ID: 13078
// Dependencies: [13031, 13018, 13004]
// Exports: addBreadcrumb

// Module 13077
import _mod13004 from "module_13004" /* 13004 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13018 */;
import _mod13031 from "module_13031" /* 13031 */;


export function addBreadcrumb(arg0, arg1) {
  let tmpResult;
  let closure_0 = arg1;
  const obj = _mod13031;
  const client = obj.getClient();
  const obj3 = _mod13031;
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
        const tmpResult2 = _mod13004;
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
