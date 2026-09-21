// Module ID: 753
// Function ID: 754
// Dependencies: [706, 733]
// Exports: createLogContainerEnvelopeItem, createLogEnvelope

// Module 753
import _mod706 from "module_706" /* 706 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 733 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createLogContainerEnvelopeItem = function createLogContainerEnvelopeItem(items) {
  items = [{ type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" }, { items }];
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
  let tmp2 = tunnel;
  if (tunnel) {
    tmp2 = dsn;
  }
  if (tmp2) {
    obj.dsn = _mod706.dsnToString(dsn);
  }
  items = [{ type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" }, { items }];
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};
