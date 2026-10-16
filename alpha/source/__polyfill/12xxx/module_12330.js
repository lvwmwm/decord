// Module ID: 12330
// Function ID: 12331
// Dependencies: [12325]
// Exports: hasTracingEnabled

// Module 12330
import _mod12325 from "module_12325" /* 12325 */;


export const hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const obj = _mod12325;
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
