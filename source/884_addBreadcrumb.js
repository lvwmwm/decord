// Module ID: 884
// Function ID: 9781
// Name: addBreadcrumb
// Dependencies: []

// Module 884 (addBreadcrumb)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  let obj = arg1(arg6[0]);
  const client = obj.getClient();
  const isolationScope = arg1(arg6[0]).getIsolationScope();
  if (client) {
    const options = client.getOptions();
    const beforeBreadcrumb = options.beforeBreadcrumb;
    let tmp3 = null;
    if (undefined !== beforeBreadcrumb) {
      tmp3 = beforeBreadcrumb;
    }
    const arg6 = tmp3;
    const maxBreadcrumbs = options.maxBreadcrumbs;
    let num = 100;
    if (undefined !== maxBreadcrumbs) {
      num = maxBreadcrumbs;
    }
    if (num > 0) {
      const _Object = Object;
      obj = { timestamp: arg1(arg6[1]).dateTimestampInSeconds() };
      let merged = Object.assign(obj, arg0);
      if (tmp3) {
        merged = arg1(arg6[2]).consoleSandbox(() => tmp3(merged, arg1));
        const obj5 = arg1(arg6[2]);
      }
      if (null !== merged) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", merged, arg1);
        }
        isolationScope.addBreadcrumb(merged, num);
      }
      const obj6 = arg1(arg6[1]);
    }
  }
};
