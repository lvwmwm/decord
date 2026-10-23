// Module ID: 12642
// Function ID: 12643
// Name: captureAggregateMetrics
// Dependencies: [12539, 12586, 12583, 12640]
// Exports: captureAggregateMetrics

// Module 12642 (captureAggregateMetrics)
import _mod12539 from "module_12539" /* 12539 */;
import _mod12583 from "module_12583" /* 12583 */;
import _mod12586 from "module_12586" /* 12586 */;
import _mod12640 from "module_12640" /* 12640 */;

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
    const obj4 = _mod12586;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12640;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12583;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12539.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
