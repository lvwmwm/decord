// Module ID: 12582
// Function ID: 12583
// Name: captureAggregateMetrics
// Dependencies: [12479, 12526, 12523, 12580]
// Exports: captureAggregateMetrics

// Module 12582 (captureAggregateMetrics)
import _mod12479 from "module_12479" /* 12479 */;
import _mod12523 from "module_12523" /* 12523 */;
import _mod12526 from "module_12526" /* 12526 */;
import _mod12580 from "module_12580" /* 12580 */;

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
    const obj4 = _mod12526;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12580;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12523;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12479.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
