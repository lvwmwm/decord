// Module ID: 7309
// Function ID: 58996
// Name: addBreadcrumb
// Dependencies: [7263, 7250, 7236]

// Module 7309 (addBreadcrumb)
const require = arg1;
let dependencyMap = arg6;
arg5.addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  const _require = arg1;
  let obj = _require(7263);
  const client = obj.getClient();
  const isolationScope = _require(7263).getIsolationScope();
  if (client) {
    const options = client.getOptions();
    const beforeBreadcrumb = options.beforeBreadcrumb;
    let tmp3 = null;
    if (undefined !== beforeBreadcrumb) {
      tmp3 = beforeBreadcrumb;
    }
    const dependencyMap = tmp3;
    const maxBreadcrumbs = options.maxBreadcrumbs;
    let num = 100;
    if (undefined !== maxBreadcrumbs) {
      num = maxBreadcrumbs;
    }
    if (num > 0) {
      const _Object = Object;
      obj = { timestamp: _require(7250).dateTimestampInSeconds() };
      let merged = Object.assign(obj, arg0);
      if (tmp3) {
        merged = _require(7236).consoleSandbox(() => tmp3(merged, closure_0));
        const obj5 = _require(7236);
      }
      if (null !== merged) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", merged, arg1);
        }
        isolationScope.addBreadcrumb(merged, num);
      }
      const obj6 = _require(7250);
    }
  }
};
