// Module ID: 750
// Function ID: 751
// Dependencies: [701, 728]
// Exports: createMetricContainerEnvelopeItem, createMetricEnvelope

// Module 750
import _mod701 from "module_701" /* 701 */;
import _mod728 from "module_728" /* 728 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function createMetricContainerEnvelopeItem(items) {
  items = [, ];
  const obj = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items[0] = obj;
  items[1] = { items };
  return items;
}
export function createMetricEnvelope(items, sdk, arg2, arg3) {
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
    const obj3 = _mod701;
    obj.dsn = obj3.dsnToString(arg3);
  }
  items = [, ];
  const obj5 = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items[0] = obj5;
  items[1] = { items };
  const items1 = [items];
  const obj4 = _mod728;
  return obj4.createEnvelope(obj, items1);
}
