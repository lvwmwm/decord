// Module ID: 12416
// Function ID: 12417
// Name: captureAggregateMetrics
// Dependencies: [12313, 12360, 12357, 12414]
// Exports: captureAggregateMetrics

// Module 12416 (captureAggregateMetrics)
import _mod12313 from "module_12313" /* 12313 */;
import _mod12357 from "module_12357" /* 12357 */;
import _mod12360 from "module_12360" /* 12360 */;
import _mod12414 from "module_12414" /* 12414 */;

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
    const obj4 = _mod12360;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12414;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12357;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12313.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
