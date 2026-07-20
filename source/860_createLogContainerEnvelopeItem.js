// Module ID: 860
// Function ID: 9621
// Name: createLogContainerEnvelopeItem
// Dependencies: []

// Module 860 (createLogContainerEnvelopeItem)
function createLogContainerEnvelopeItem(item_count) {
  const items = [{ item_count: item_count.length }, { items: item_count }];
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
    obj.dsn = _metadata(arg6[0]).dsnToString(dsn);
    const obj3 = _metadata(arg6[0]);
  }
  items = [createLogContainerEnvelopeItem(items)];
  return _metadata(arg6[1]).createEnvelope(obj, items);
};
