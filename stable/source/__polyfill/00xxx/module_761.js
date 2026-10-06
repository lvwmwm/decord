// Module ID: 761
// Function ID: 762
// Dependencies: [714, 741]
// Exports: createLogContainerEnvelopeItem, createLogEnvelope

// Module 761
import _mod714 from "module_714" /* 714 */;
import _mod741 from "module_741" /* 741 */;

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
    const obj3 = _mod714;
    obj.dsn = obj3.dsnToString(dsn);
  }
  items = [, ];
  const obj5 = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items[0] = obj5;
  items[1] = { items };
  const items1 = [items];
  const obj4 = _mod741;
  return obj4.createEnvelope(obj, items1);
};
