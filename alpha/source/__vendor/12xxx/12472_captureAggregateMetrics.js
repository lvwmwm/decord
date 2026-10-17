// Module ID: 12472
// Function ID: 12473
// Name: captureAggregateMetrics
// Dependencies: [12369, 12416, 12413, 12470]
// Exports: captureAggregateMetrics

// Module 12472 (captureAggregateMetrics)
import _mod12369 from "module_12369" /* 12369 */;
import _mod12413 from "module_12413" /* 12413 */;
import _mod12416 from "module_12416" /* 12416 */;
import _mod12470 from "module_12470" /* 12470 */;

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
    const obj4 = _mod12416;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12470;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12413;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12369.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
