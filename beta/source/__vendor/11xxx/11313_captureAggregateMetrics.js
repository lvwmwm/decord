// Module ID: 11313
// Function ID: 11314
// Name: captureAggregateMetrics
// Dependencies: [11210, 11257, 11254, 11311]
// Exports: captureAggregateMetrics

// Module 11313 (captureAggregateMetrics)
import _mod11210 from "module_11210" /* 11210 */;
import _mod11254 from "module_11254" /* 11254 */;
import _mod11257 from "module_11257" /* 11257 */;
import _mod11311 from "module_11311" /* 11311 */;

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
    const obj4 = _mod11257;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod11311;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod11254;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod11210.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
