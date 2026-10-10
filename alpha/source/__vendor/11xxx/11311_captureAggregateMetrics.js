// Module ID: 11311
// Function ID: 11312
// Name: captureAggregateMetrics
// Dependencies: [11208, 11255, 11252, 11309]
// Exports: captureAggregateMetrics

// Module 11311 (captureAggregateMetrics)
import _mod11208 from "module_11208" /* 11208 */;
import _mod11252 from "module_11252" /* 11252 */;
import _mod11255 from "module_11255" /* 11255 */;
import _mod11309 from "module_11309" /* 11309 */;

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
    const obj4 = _mod11255;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod11309;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod11252;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod11208.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
