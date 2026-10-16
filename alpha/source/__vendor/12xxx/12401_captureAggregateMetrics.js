// Module ID: 12401
// Function ID: 12402
// Name: captureAggregateMetrics
// Dependencies: [12298, 12345, 12342, 12399]
// Exports: captureAggregateMetrics

// Module 12401 (captureAggregateMetrics)
import _mod12298 from "module_12298" /* 12298 */;
import _mod12342 from "module_12342" /* 12342 */;
import _mod12345 from "module_12345" /* 12345 */;
import _mod12399 from "module_12399" /* 12399 */;

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
    const obj4 = _mod12345;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12399;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12342;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12298.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
