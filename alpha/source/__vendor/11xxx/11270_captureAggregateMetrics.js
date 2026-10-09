// Module ID: 11270
// Function ID: 11271
// Name: captureAggregateMetrics
// Dependencies: [11167, 11214, 11211, 11268]
// Exports: captureAggregateMetrics

// Module 11270 (captureAggregateMetrics)
import _mod11167 from "module_11167" /* 11167 */;
import _mod11211 from "module_11211" /* 11211 */;
import _mod11214 from "module_11214" /* 11214 */;
import _mod11268 from "module_11268" /* 11268 */;

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
    const obj4 = _mod11214;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod11268;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod11211;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod11167.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
