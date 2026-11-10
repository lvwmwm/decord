// Module ID: 13395
// Function ID: 13396
// Name: captureAggregateMetrics
// Dependencies: [13292, 13339, 13336, 13393]
// Exports: captureAggregateMetrics

// Module 13395 (captureAggregateMetrics)
import _mod13292 from "module_13292" /* 13292 */;
import _mod13336 from "module_13336" /* 13336 */;
import _mod13339 from "module_13339" /* 13339 */;
import _mod13393 from "module_13393" /* 13393 */;

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
    const obj4 = _mod13339;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13393;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13336;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13292.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
