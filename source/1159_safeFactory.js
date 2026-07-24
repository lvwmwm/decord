// Module ID: 1159
// Function ID: 13198
// Name: safeFactory
// Dependencies: [794]

// Module 1159 (safeFactory)
const require = arg1;
const dependencyMap = arg6;
arg5.safeFactory = function safeFactory(beforeBreadcrumb, arg1) {
  let fn = beforeBreadcrumb;
  let closure_0 = beforeBreadcrumb;
  if (arguments.length > 1) {
    let closure_1 = {};
    if ("function" === typeof fn) {
      fn = () => beforeBreadcrumb(...arguments);
    }
    return fn;
  }
};
arg5.safeTracesSampler = function safeTracesSampler(tracesSampler) {
  let fn = tracesSampler;
  let closure_0 = tracesSampler;
  if (tracesSampler) {
    fn = () => tracesSampler(...arguments);
  }
  return fn;
};
