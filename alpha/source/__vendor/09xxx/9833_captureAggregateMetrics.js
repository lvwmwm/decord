// Module ID: 9833
// Function ID: 9834
// Name: captureAggregateMetrics
// Dependencies: [9730, 9777, 9774, 9831]
// Exports: captureAggregateMetrics

// Module 9833 (captureAggregateMetrics)
import _mod9730 from "module_9730" /* 9730 */;
import _mod9774 from "module_9774" /* 9774 */;
import _mod9777 from "module_9777" /* 9777 */;
import _mod9831 from "module_9831" /* 9831 */;

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
    const obj4 = _mod9777;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod9831;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod9774;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod9730.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
