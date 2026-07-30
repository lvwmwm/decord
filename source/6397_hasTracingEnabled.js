// Module ID: 6397
// Function ID: 6398
// Name: hasTracingEnabled
// Dependencies: [6392]

// Module 6397 (hasTracingEnabled)
const require = arg1;
const dependencyMap = arg6;
arg5.hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ !== "sur") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const client = require(6392) /* getClient */.getClient();
  if (!tracesSampler) {
    let options = client;
    if (client) {
      options = client.getOptions();
    }
    tmp = options;
  }
  let tmp3 = tmp;
  if (tmp3) {
    let enableTracing = tmp.enableTracing;
    if (!enableTracing) {
      enableTracing = "tracesSampleRate" in tmp;
    }
    if (!enableTracing) {
      enableTracing = "tracesSampler" in tmp;
    }
    tmp3 = enableTracing;
  }
  return tmp3;
};
