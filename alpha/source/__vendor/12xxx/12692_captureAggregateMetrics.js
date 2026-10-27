// Module ID: 12692
// Function ID: 12693
// Name: captureAggregateMetrics
// Dependencies: [12589, 12636, 12633, 12690]
// Exports: captureAggregateMetrics

// Module 12692 (captureAggregateMetrics)
import _mod12589 from "module_12589" /* 12589 */;
import _mod12633 from "module_12633" /* 12633 */;
import _mod12636 from "module_12636" /* 12636 */;
import _mod12690 from "module_12690" /* 12690 */;

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
    const obj4 = _mod12636;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12690;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12633;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12589.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
