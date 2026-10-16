// Module ID: 12407
// Function ID: 12408
// Name: captureAggregateMetrics
// Dependencies: [12304, 12351, 12348, 12405]
// Exports: captureAggregateMetrics

// Module 12407 (captureAggregateMetrics)
import _mod12304 from "module_12304" /* 12304 */;
import _mod12348 from "module_12348" /* 12348 */;
import _mod12351 from "module_12351" /* 12351 */;
import _mod12405 from "module_12405" /* 12405 */;

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
    const obj4 = _mod12351;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12405;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12348;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12304.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
