// Module ID: 9834
// Function ID: 9835
// Name: captureAggregateMetrics
// Dependencies: [9731, 9778, 9775, 9832]
// Exports: captureAggregateMetrics

// Module 9834 (captureAggregateMetrics)
import _mod9731 from "module_9731" /* 9731 */;
import _mod9775 from "module_9775" /* 9775 */;
import _mod9778 from "module_9778" /* 9778 */;
import _mod9832 from "module_9832" /* 9832 */;

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
    const obj4 = _mod9778;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod9832;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod9775;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod9731.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
