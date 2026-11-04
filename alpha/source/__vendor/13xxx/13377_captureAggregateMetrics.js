// Module ID: 13377
// Function ID: 13378
// Name: captureAggregateMetrics
// Dependencies: [13274, 13321, 13318, 13375]
// Exports: captureAggregateMetrics

// Module 13377 (captureAggregateMetrics)
import _mod13274 from "module_13274" /* 13274 */;
import _mod13318 from "module_13318" /* 13318 */;
import _mod13321 from "module_13321" /* 13321 */;
import _mod13375 from "module_13375" /* 13375 */;

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
    const obj4 = _mod13321;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13375;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13318;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13274.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
