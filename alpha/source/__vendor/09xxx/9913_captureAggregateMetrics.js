// Module ID: 9913
// Function ID: 9914
// Name: captureAggregateMetrics
// Dependencies: [9810, 9857, 9854, 9911]
// Exports: captureAggregateMetrics

// Module 9913 (captureAggregateMetrics)
import _mod9810 from "module_9810" /* 9810 */;
import _mod9854 from "module_9854" /* 9854 */;
import _mod9857 from "module_9857" /* 9857 */;
import _mod9911 from "module_9911" /* 9911 */;

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
    const obj4 = _mod9857;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod9911;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod9854;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod9810.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
