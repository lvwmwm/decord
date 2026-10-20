// Module ID: 12526
// Function ID: 12527
// Name: captureAggregateMetrics
// Dependencies: [12423, 12470, 12467, 12524]
// Exports: captureAggregateMetrics

// Module 12526 (captureAggregateMetrics)
import _mod12423 from "module_12423" /* 12423 */;
import _mod12467 from "module_12467" /* 12467 */;
import _mod12470 from "module_12470" /* 12470 */;
import _mod12524 from "module_12524" /* 12524 */;

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
    const obj4 = _mod12470;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12524;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12467;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12423.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
