// Module ID: 13341
// Function ID: 13342
// Dependencies: [13336]
// Exports: hasTracingEnabled

// Module 13341
import _mod13336 from "module_13336" /* 13336 */;


export function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const obj = _mod13336;
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
}
