// Module ID: 862
// Function ID: 9638
// Name: createMetricContainerEnvelopeItem
// Dependencies: [814, 840]

// Module 862 (createMetricContainerEnvelopeItem)
const require = arg1;
const dependencyMap = arg6;
function createMetricContainerEnvelopeItem(items) {
  const obj = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
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
    obj.dsn = require(814) /* dsnFromString */.dsnToString(arg3);
    const obj3 = require(814) /* dsnFromString */;
  }
  items = [createMetricContainerEnvelopeItem(items)];
  return require(840) /* forEachEnvelopeItem */.createEnvelope(obj, items);
};
