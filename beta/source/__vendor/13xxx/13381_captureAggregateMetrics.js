// Module ID: 13381
// Function ID: 13382
// Name: captureAggregateMetrics
// Dependencies: [13278, 13325, 13322, 13379]
// Exports: captureAggregateMetrics

// Module 13381 (captureAggregateMetrics)
import _mod13278 from "module_13278" /* 13278 */;
import _mod13322 from "module_13322" /* 13322 */;
import _mod13325 from "module_13325" /* 13325 */;
import _mod13379 from "module_13379" /* 13379 */;

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
    const obj4 = _mod13325;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13379;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13322;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13278.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
