// Module ID: 12956
// Function ID: 12957
// Name: captureAggregateMetrics
// Dependencies: [12853, 12900, 12897, 12954]
// Exports: captureAggregateMetrics

// Module 12956 (captureAggregateMetrics)
import _mod12853 from "module_12853" /* 12853 */;
import _mod12897 from "module_12897" /* 12897 */;
import _mod12900 from "module_12900" /* 12900 */;
import _mod12954 from "module_12954" /* 12954 */;

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
    const obj4 = _mod12900;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12954;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12897;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod12853.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
