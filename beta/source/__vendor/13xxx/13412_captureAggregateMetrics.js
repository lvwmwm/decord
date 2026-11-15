// Module ID: 13412
// Function ID: 13413
// Name: captureAggregateMetrics
// Dependencies: [13309, 13356, 13353, 13410]
// Exports: captureAggregateMetrics

// Module 13412 (captureAggregateMetrics)
import _mod13309 from "module_13309" /* 13309 */;
import _mod13353 from "module_13353" /* 13353 */;
import _mod13356 from "module_13356" /* 13356 */;
import _mod13410 from "module_13410" /* 13410 */;

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
    const obj4 = _mod13356;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13410;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13353;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13309.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
