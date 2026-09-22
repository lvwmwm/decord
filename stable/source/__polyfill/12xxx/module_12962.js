// Module ID: 12962
// Function ID: 12963
// Dependencies: [12957]
// Exports: hasTracingEnabled

// Module 12962
import _mod12957 from "module_12957" /* 12957 */;

require = arg1;
const dependencyMap = arg6;

export const hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const client = _mod12957.getClient();
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
