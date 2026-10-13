// Module ID: 12109
// Function ID: 12110
// Name: captureAggregateMetrics
// Dependencies: [12006, 12053, 12050, 12107]
// Exports: captureAggregateMetrics

// Module 12109 (captureAggregateMetrics)
import _mod12006 from "module_12006" /* 12006 */;
import _mod12050 from "module_12050" /* 12050 */;
import _mod12053 from "module_12053" /* 12053 */;
import _mod12107 from "module_12107" /* 12107 */;

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
    const obj4 = _mod12053;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12107;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12050;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12006.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
