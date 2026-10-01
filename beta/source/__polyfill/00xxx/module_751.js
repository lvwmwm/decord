// Module ID: 751
// Function ID: 752
// Dependencies: [702, 729]
// Exports: createMetricContainerEnvelopeItem, createMetricEnvelope

// Module 751
import _mod702 from "module_702" /* 702 */;
import _mod729 from "module_729" /* 729 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createMetricContainerEnvelopeItem = function createMetricContainerEnvelopeItem(items) {
  items = [, ];
  const obj = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items[0] = obj;
  items[1] = { items };
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
  const tmp2 = arg2 && arg3;
  if (tmp2) {
    const obj3 = _mod702;
    obj.dsn = obj3.dsnToString(arg3);
  }
  items = [, ];
  const obj5 = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items[0] = obj5;
  items[1] = { items };
  const items1 = [items];
  const obj4 = _mod729;
  return obj4.createEnvelope(obj, items1);
};
