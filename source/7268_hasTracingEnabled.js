// Module ID: 7268
// Function ID: 58579
// Name: hasTracingEnabled
// Dependencies: [7263]

// Module 7268 (hasTracingEnabled)
const require = arg1;
const dependencyMap = arg6;
arg5.hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  let tmp = tracesSampler;
  if ("boolean" === typeof globalThis.__SENTRY_TRACING__) {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  const client = require(7263) /* getCurrentScope */.getClient();
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
