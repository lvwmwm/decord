// Module ID: 12617
// Function ID: 12618
// Name: captureAggregateMetrics
// Dependencies: [12514, 12561, 12558, 12615]
// Exports: captureAggregateMetrics

// Module 12617 (captureAggregateMetrics)
import _mod12514 from "module_12514" /* 12514 */;
import _mod12558 from "module_12558" /* 12558 */;
import _mod12561 from "module_12561" /* 12561 */;
import _mod12615 from "module_12615" /* 12615 */;

require = arg1;
const dependencyMap = arg6;
function createMetricEnvelope(arg0, arg1, sdk, arg3) {
  const obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg1;
  }
  if (tmp) {
    obj.dsn = _mod12561.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod12615.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12558.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12514.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
