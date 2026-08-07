// Module ID: 7467
// Function ID: 7468
// Name: addBreadcrumb
// Dependencies: [7421, 7408, 7394]

// Module 7467 (addBreadcrumb)
const require = arg1;
let dependencyMap = arg6;
arg5.addBreadcrumb = function addBreadcrumb(arg0, arg1) {
  const _require = arg1;
  let consoleSandboxResult = _require(7421);
  const client = consoleSandboxResult.getClient();
  const isolationScope = _require(7421).getIsolationScope();
  if (client) {
    const options = client.getOptions();
    const beforeBreadcrumb = options.beforeBreadcrumb;
    let tmp5 = null;
    if (undefined !== beforeBreadcrumb) {
      tmp5 = beforeBreadcrumb;
    }
    const dependencyMap = tmp5;
    const maxBreadcrumbs = options.maxBreadcrumbs;
    let num = 100;
    if (undefined !== maxBreadcrumbs) {
      num = maxBreadcrumbs;
    }
    if (num > 0) {
      consoleSandboxResult = { timestamp: null };
      let tmpResult = tmp(7408);
      consoleSandboxResult[0] = tmpResult.dateTimestampInSeconds();
      const merged = Object.assign(arg0);
      let closure_2 = consoleSandboxResult;
      if (tmp5) {
        tmpResult = tmp(7394);
        consoleSandboxResult = tmpResult.consoleSandbox(() => tmp5(closure_2, closure_0));
      }
      if (null !== consoleSandboxResult) {
        if (client.emit) {
          client.emit("beforeAddBreadcrumb", consoleSandboxResult, arg1);
        }
        isolationScope.addBreadcrumb(consoleSandboxResult, num);
      }
    }
  }
};
