// Module ID: 13347
// Function ID: 13348
// Dependencies: [13301, 13288, 13274]
// Exports: addBreadcrumb

// Module 13347
import _mod13274 from "module_13274" /* 13274 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13288 */;
import _mod13301 from "module_13301" /* 13301 */;


export function addBreadcrumb(arg0, arg1) {
  let tmpResult;
  let closure_0 = arg1;
  const obj = _mod13301;
  const client = obj.getClient();
  const obj3 = _mod13301;
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
        const tmpResult2 = _mod13274;
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
