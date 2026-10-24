// Module ID: 12676
// Function ID: 12677
// Name: captureAggregateMetrics
// Dependencies: [12573, 12620, 12617, 12674]
// Exports: captureAggregateMetrics

// Module 12676 (captureAggregateMetrics)
import _mod12573 from "module_12573" /* 12573 */;
import _mod12617 from "module_12617" /* 12617 */;
import _mod12620 from "module_12620" /* 12620 */;
import _mod12674 from "module_12674" /* 12674 */;

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
    const obj4 = _mod12620;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12674;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12617;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12573.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
