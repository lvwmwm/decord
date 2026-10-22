// Module ID: 12623
// Function ID: 12624
// Name: captureAggregateMetrics
// Dependencies: [12520, 12567, 12564, 12621]
// Exports: captureAggregateMetrics

// Module 12623 (captureAggregateMetrics)
import _mod12520 from "module_12520" /* 12520 */;
import _mod12564 from "module_12564" /* 12564 */;
import _mod12567 from "module_12567" /* 12567 */;
import _mod12621 from "module_12621" /* 12621 */;

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
    const obj4 = _mod12567;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12621;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12564;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12520.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
