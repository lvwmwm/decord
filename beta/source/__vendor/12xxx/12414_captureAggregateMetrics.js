// Module ID: 12414
// Function ID: 12415
// Name: captureAggregateMetrics
// Dependencies: [12311, 12358, 12355, 12412]
// Exports: captureAggregateMetrics

// Module 12414 (captureAggregateMetrics)
import _mod12311 from "module_12311" /* 12311 */;
import _mod12355 from "module_12355" /* 12355 */;
import _mod12358 from "module_12358" /* 12358 */;
import _mod12412 from "module_12412" /* 12412 */;

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
    const obj4 = _mod12358;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12412;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12355;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12311.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
