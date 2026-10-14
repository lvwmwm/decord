// Module ID: 12145
// Function ID: 12146
// Name: captureAggregateMetrics
// Dependencies: [12042, 12089, 12086, 12143]
// Exports: captureAggregateMetrics

// Module 12145 (captureAggregateMetrics)
import _mod12042 from "module_12042" /* 12042 */;
import _mod12086 from "module_12086" /* 12086 */;
import _mod12089 from "module_12089" /* 12089 */;
import _mod12143 from "module_12143" /* 12143 */;

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
    const obj4 = _mod12089;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12143;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12086;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12042.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
