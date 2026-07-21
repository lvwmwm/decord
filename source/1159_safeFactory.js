// Module ID: 1159
// Function ID: 13196
// Name: safeFactory
// Dependencies: []

// Module 1159 (safeFactory)
arg5.safeFactory = function safeFactory(beforeBreadcrumb, arg1) {
  let fn = beforeBreadcrumb;
  arg1 = beforeBreadcrumb;
  if (arguments.length > 1) {
    let closure_1 = {};
    if ("function" === typeof fn) {
      fn = () => arg0(...arguments);
    }
    return fn;
  }
};
arg5.safeTracesSampler = function safeTracesSampler(tracesSampler) {
  let fn = tracesSampler;
  const arg1 = tracesSampler;
  if (tracesSampler) {
    fn = () => arg0(...arguments);
  }
  return fn;
};
