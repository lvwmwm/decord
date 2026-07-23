// Module ID: 860
// Function ID: 9626
// Name: createLogContainerEnvelopeItem
// Dependencies: [814, 840]

// Module 860 (createLogContainerEnvelopeItem)
const require = arg1;
const dependencyMap = arg6;
function createLogContainerEnvelopeItem(items) {
  const obj = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items = [obj, { items }];
  return items;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createLogContainerEnvelopeItem = createLogContainerEnvelopeItem;
arg5.createLogEnvelope = function createLogEnvelope(items, _metadata, tunnel, dsn) {
  let tmp = tunnel;
  let obj = {};
  if (tmp2) {
    obj = { name: _metadata.sdk.name, version: _metadata.sdk.version };
    obj.sdk = obj;
  }
  if (tmp) {
    tmp = dsn;
  }
  if (tmp) {
    obj.dsn = require(814) /* dsnFromString */.dsnToString(dsn);
    const obj3 = require(814) /* dsnFromString */;
  }
  items = [createLogContainerEnvelopeItem(items)];
  return require(840) /* forEachEnvelopeItem */.createEnvelope(obj, items);
};
