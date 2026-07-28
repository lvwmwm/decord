// Module ID: 6379
// Function ID: 57121
// Name: hasTracingEnabled
// Dependencies: [6374]

// Module 6379 (hasTracingEnabled)
const require = arg1;
const dependencyMap = arg6;
arg5.hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  let tmp = tracesSampler;
  if ("boolean" === typeof globalThis.__SENTRY_TRACING__) {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  const client = require(6374) /* getCurrentScope */.getClient();
  if (!tmp) {
    let options = client;
    if (client) {
      options = client.getOptions();
    }
    tmp = options;
  }
  let tmp4 = !tmp3;
  if (!!tmp) {
    let enableTracing = tmp.enableTracing;
    if (!enableTracing) {
      enableTracing = "tracesSampleRate" in tmp;
    }
    if (!enableTracing) {
      enableTracing = "tracesSampler" in tmp;
    }
    tmp4 = enableTracing;
  }
  return tmp4;
};
