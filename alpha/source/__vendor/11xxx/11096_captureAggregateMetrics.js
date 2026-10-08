// Module ID: 11096
// Function ID: 11097
// Name: captureAggregateMetrics
// Dependencies: [10993, 11040, 11037, 11094]
// Exports: captureAggregateMetrics

// Module 11096 (captureAggregateMetrics)
import _mod10993 from "module_10993" /* 10993 */;
import _mod11037 from "module_11037" /* 11037 */;
import _mod11040 from "module_11040" /* 11040 */;
import _mod11094 from "module_11094" /* 11094 */;

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
    const obj4 = _mod11040;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod11094;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod11037;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod10993.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
