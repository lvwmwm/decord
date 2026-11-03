// Module ID: 13293
// Function ID: 13294
// Name: captureAggregateMetrics
// Dependencies: [13190, 13237, 13234, 13291]
// Exports: captureAggregateMetrics

// Module 13293 (captureAggregateMetrics)
import _mod13190 from "module_13190" /* 13190 */;
import _mod13234 from "module_13234" /* 13234 */;
import _mod13237 from "module_13237" /* 13237 */;
import _mod13291 from "module_13291" /* 13291 */;

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
    const obj4 = _mod13237;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13291;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13234;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13190.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
