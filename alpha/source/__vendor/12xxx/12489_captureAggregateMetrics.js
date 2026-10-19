// Module ID: 12489
// Function ID: 12490
// Name: captureAggregateMetrics
// Dependencies: [12386, 12433, 12430, 12487]
// Exports: captureAggregateMetrics

// Module 12489 (captureAggregateMetrics)
import _mod12386 from "module_12386" /* 12386 */;
import _mod12430 from "module_12430" /* 12430 */;
import _mod12433 from "module_12433" /* 12433 */;
import _mod12487 from "module_12487" /* 12487 */;

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
    const obj4 = _mod12433;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12487;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12430;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12386.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
