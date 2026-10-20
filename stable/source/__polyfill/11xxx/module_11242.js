// Module ID: 11242
// Function ID: 11243
// Dependencies: [11237]
// Exports: hasTracingEnabled

// Module 11242
import _mod11237 from "module_11237" /* 11237 */;


export const hasTracingEnabled = function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const obj = _mod11237;
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
