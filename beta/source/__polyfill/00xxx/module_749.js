// Module ID: 749
// Function ID: 750
// Dependencies: [702, 729]
// Exports: createLogContainerEnvelopeItem, createLogEnvelope

// Module 749
import _mod702 from "module_702" /* 702 */;
import _mod729 from "module_729" /* 729 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createLogContainerEnvelopeItem = function createLogContainerEnvelopeItem(items) {
  items = [, ];
  const obj = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items[0] = obj;
  items[1] = { items };
  return items;
};
export const createLogEnvelope = function createLogEnvelope(items, _metadata, tunnel, dsn) {
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
    const obj3 = _mod702;
    obj.dsn = obj3.dsnToString(dsn);
  }
  items = [, ];
  const obj5 = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items[0] = obj5;
  items[1] = { items };
  const items1 = [items];
  const obj4 = _mod729;
  return obj4.createEnvelope(obj, items1);
};
