// Module ID: 9900
// Function ID: 9901
// Name: captureAggregateMetrics
// Dependencies: [9797, 9844, 9841, 9898]
// Exports: captureAggregateMetrics

// Module 9900 (captureAggregateMetrics)
import _mod9797 from "module_9797" /* 9797 */;
import _mod9841 from "module_9841" /* 9841 */;
import _mod9844 from "module_9844" /* 9844 */;
import _mod9898 from "module_9898" /* 9898 */;

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
    const obj4 = _mod9844;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod9898;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod9841;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod9797.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
