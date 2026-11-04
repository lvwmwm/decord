// Module ID: 12714
// Function ID: 12715
// Name: captureAggregateMetrics
// Dependencies: [12611, 12658, 12655, 12712]
// Exports: captureAggregateMetrics

// Module 12714 (captureAggregateMetrics)
import _mod12611 from "module_12611" /* 12611 */;
import _mod12655 from "module_12655" /* 12655 */;
import _mod12658 from "module_12658" /* 12658 */;
import _mod12712 from "module_12712" /* 12712 */;

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
    const obj4 = _mod12658;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12712;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12655;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12611.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
