// Module ID: 748
// Function ID: 749
// Dependencies: [701, 728]
// Exports: createLogContainerEnvelopeItem, createLogEnvelope

// Module 748
import _mod701 from "module_701" /* 701 */;
import _mod728 from "module_728" /* 728 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function createLogContainerEnvelopeItem(items) {
  items = [, ];
  const obj = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items[0] = obj;
  items[1] = { items };
  return items;
}
export function createLogEnvelope(items, _metadata, tunnel, dsn) {
  let sdk;
  if (_metadata != null) {
    sdk = _metadata.sdk;
  }
  const obj = {};
  if (sdk) {
    const obj2 = { name: _metadata.sdk.name, version: _metadata.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = tunnel && dsn;
  if (tmp2) {
    const obj3 = _mod701;
    obj.dsn = obj3.dsnToString(dsn);
  }
  items = [, ];
  const obj5 = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items[0] = obj5;
  items[1] = { items };
  const items1 = [items];
  const obj4 = _mod728;
  return obj4.createEnvelope(obj, items1);
}
