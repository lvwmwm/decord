// Module ID: 13376
// Function ID: 13377
// Name: captureAggregateMetrics
// Dependencies: [13273, 13320, 13317, 13374]
// Exports: captureAggregateMetrics

// Module 13376 (captureAggregateMetrics)
import _mod13273 from "module_13273" /* 13273 */;
import _mod13317 from "module_13317" /* 13317 */;
import _mod13320 from "module_13320" /* 13320 */;
import _mod13374 from "module_13374" /* 13374 */;

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
    const obj4 = _mod13320;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13374;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13317;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13273.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
