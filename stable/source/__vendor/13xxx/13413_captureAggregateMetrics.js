// Module ID: 13413
// Function ID: 13414
// Name: captureAggregateMetrics
// Dependencies: [13310, 13357, 13354, 13411]
// Exports: captureAggregateMetrics

// Module 13413 (captureAggregateMetrics)
import _mod13310 from "module_13310" /* 13310 */;
import _mod13354 from "module_13354" /* 13354 */;
import _mod13357 from "module_13357" /* 13357 */;
import _mod13411 from "module_13411" /* 13411 */;

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
    const obj4 = _mod13357;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13411;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13354;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13310.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
