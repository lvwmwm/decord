// Module ID: 12509
// Function ID: 12510
// Name: captureAggregateMetrics
// Dependencies: [12406, 12453, 12450, 12507]
// Exports: captureAggregateMetrics

// Module 12509 (captureAggregateMetrics)
import _mod12406 from "module_12406" /* 12406 */;
import _mod12450 from "module_12450" /* 12450 */;
import _mod12453 from "module_12453" /* 12453 */;
import _mod12507 from "module_12507" /* 12507 */;

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
    const obj4 = _mod12453;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12507;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12450;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12406.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
