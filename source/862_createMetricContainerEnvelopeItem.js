// Module ID: 862
// Function ID: 9632
// Name: createMetricContainerEnvelopeItem
// Dependencies: []

// Module 862 (createMetricContainerEnvelopeItem)
function createMetricContainerEnvelopeItem(item_count) {
  const items = [{ item_count: item_count.length }, { items: item_count }];
  return items;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createMetricContainerEnvelopeItem = createMetricContainerEnvelopeItem;
arg5.createMetricEnvelope = function createMetricEnvelope(item_count, sdk) {
  let tmp = arg2;
  let obj = {};
  if (tmp2) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  if (tmp) {
    tmp = arg3;
  }
  if (tmp) {
    obj.dsn = sdk(arg6[0]).dsnToString(arg3);
    const obj3 = sdk(arg6[0]);
  }
  const items = [createMetricContainerEnvelopeItem(item_count)];
  return sdk(arg6[1]).createEnvelope(obj, items);
};
