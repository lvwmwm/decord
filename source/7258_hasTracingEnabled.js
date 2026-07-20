// Module ID: 7258
// Function ID: 58482
// Name: hasTracingEnabled
// Dependencies: []

// Module 7258 (hasTracingEnabled)
arg5.hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  let tmp = tracesSampler;
  if ("boolean" === typeof globalThis.__SENTRY_TRACING__) {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  const client = arg1(arg6[0]).getClient();
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
