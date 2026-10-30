// Module ID: 13107
// Function ID: 13108
// Name: captureAggregateMetrics
// Dependencies: [13004, 13051, 13048, 13105]
// Exports: captureAggregateMetrics

// Module 13107 (captureAggregateMetrics)
import _mod13004 from "module_13004" /* 13004 */;
import _mod13048 from "module_13048" /* 13048 */;
import _mod13051 from "module_13051" /* 13051 */;
import _mod13105 from "module_13105" /* 13105 */;

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
    const obj4 = _mod13051;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod13105;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod13048;
  return obj7.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13004.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
