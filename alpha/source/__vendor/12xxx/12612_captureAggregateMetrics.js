// Module ID: 12612
// Function ID: 12613
// Name: captureAggregateMetrics
// Dependencies: [12509, 12556, 12553, 12610]
// Exports: captureAggregateMetrics

// Module 12612 (captureAggregateMetrics)
import _mod12509 from "module_12509" /* 12509 */;
import _mod12553 from "module_12553" /* 12553 */;
import _mod12556 from "module_12556" /* 12556 */;
import _mod12610 from "module_12610" /* 12610 */;

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
    const obj4 = _mod12556;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12610;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12553;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12509.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
