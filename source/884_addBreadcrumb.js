// Module ID: 884
// Function ID: 9787
// Name: addBreadcrumb
// Dependencies: [825, 815, 801]

// Module 884 (addBreadcrumb)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  const _require = arg1;
  let obj = _require(825);
  const client = obj.getClient();
  const isolationScope = _require(825).getIsolationScope();
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
      obj = { timestamp: _require(815).dateTimestampInSeconds() };
      let merged = Object.assign(obj, arg0);
      if (tmp3) {
        merged = _require(801).consoleSandbox(() => tmp3(merged, closure_0));
        const obj5 = _require(801);
      }
      if (null !== merged) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", merged, arg1);
        }
        isolationScope.addBreadcrumb(merged, num);
      }
      const obj6 = _require(815);
    }
  }
};
