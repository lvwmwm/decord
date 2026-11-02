// Module ID: 13157
// Function ID: 13158
// Name: captureAggregateMetrics
// Dependencies: [13054, 13101, 13098, 13155]
// Exports: captureAggregateMetrics

// Module 13157 (captureAggregateMetrics)
import _mod13054 from "module_13054" /* 13054 */;
import _mod13098 from "module_13098" /* 13098 */;
import _mod13101 from "module_13101" /* 13101 */;
import _mod13155 from "module_13155" /* 13155 */;

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
    const obj4 = _mod13101;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13155;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13098;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13054.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
