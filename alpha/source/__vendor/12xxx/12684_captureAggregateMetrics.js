// Module ID: 12684
// Function ID: 12685
// Name: captureAggregateMetrics
// Dependencies: [12581, 12628, 12625, 12682]
// Exports: captureAggregateMetrics

// Module 12684 (captureAggregateMetrics)
import _mod12581 from "module_12581" /* 12581 */;
import _mod12625 from "module_12625" /* 12625 */;
import _mod12628 from "module_12628" /* 12628 */;
import _mod12682 from "module_12682" /* 12682 */;

function createMetricEnvelope(arg0, arg1, sdk, arg3) {
  let date;
  const obj = { sent_at: date.toISOString() };
  date = new Date();
  const tmp = sdk && sdk.sdk;
  if (tmp) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = arg3 && arg1;
  if (tmp2) {
    const obj4 = _mod12628;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12682;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12625;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12581.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
