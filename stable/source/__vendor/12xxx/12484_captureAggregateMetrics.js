// Module ID: 12484
// Function ID: 12485
// Name: captureAggregateMetrics
// Dependencies: [12381, 12428, 12425, 12482]
// Exports: captureAggregateMetrics

// Module 12484 (captureAggregateMetrics)
import _mod12381 from "module_12381" /* 12381 */;
import _mod12425 from "module_12425" /* 12425 */;
import _mod12428 from "module_12428" /* 12428 */;
import _mod12482 from "module_12482" /* 12482 */;

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
    const obj4 = _mod12428;
    obj.dsn = obj4.dsnToString(arg1);
  }
  const obj5 = _mod12482;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12425;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12381.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
