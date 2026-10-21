// Module ID: 12511
// Function ID: 12512
// Dependencies: [12506]
// Exports: hasTracingEnabled

// Module 12511
import _mod12506 from "module_12506" /* 12506 */;


export const hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const obj = _mod12506;
  const client = obj.getClient();
  if (!tracesSampler) {
    tmp = client && client.getOptions();
    client && client.getOptions();
  }
  let tmp3 = tmp;
  if (tmp3) {
    const enableTracing = tmp.enableTracing || "tracesSampleRate" in tmp || "tracesSampler" in tmp;
    tmp3 = enableTracing;
  }
  return tmp3;
};
