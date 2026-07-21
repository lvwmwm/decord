// Module ID: 862
// Function ID: 9632
// Name: createMetricContainerEnvelopeItem
// Dependencies: []

// Module 862 (createMetricContainerEnvelopeItem)
function createMetricContainerEnvelopeItem(items) {
  const obj = { -9223372036854775808: 55739657, 9223372036854775807: 1104668969, 9223372036854775807: 115270, item_count: items.length };
  items = [obj, { items }];
  return items;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createMetricContainerEnvelopeItem = createMetricContainerEnvelopeItem;
arg5.createMetricEnvelope = function createMetricEnvelope(items, sdk) {
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
  items = [createMetricContainerEnvelopeItem(items)];
  return sdk(arg6[1]).createEnvelope(obj, items);
};
