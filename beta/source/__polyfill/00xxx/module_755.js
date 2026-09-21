// Module ID: 755
// Function ID: 756
// Dependencies: [706, 733]
// Exports: createMetricContainerEnvelopeItem, createMetricEnvelope

// Module 755
import _mod706 from "module_706" /* 706 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 733 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createMetricContainerEnvelopeItem = function createMetricContainerEnvelopeItem(items) {
  items = [{ type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" }, { items }];
  return items;
};
export const createMetricEnvelope = function createMetricEnvelope(items, sdk, arg2, arg3) {
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  const obj = {};
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp2 = arg2;
  if (arg2) {
    tmp2 = arg3;
  }
  if (tmp2) {
    obj.dsn = _mod706.dsnToString(arg3);
  }
  items = [{ type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" }, { items }];
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};
