// Module ID: 13033
// Function ID: 13034
// Name: captureAggregateMetrics
// Dependencies: [12930, 12977, 12974, 13031]
// Exports: captureAggregateMetrics

// Module 13033 (captureAggregateMetrics)
import _mod12930 from "module_12930" /* 12930 */;
import _mod12974 from "module_12974" /* 12974 */;
import _mod12977 from "module_12977" /* 12977 */;
import _mod13031 from "module_13031" /* 13031 */;

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
    obj.dsn = _mod12977.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod13031.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12974.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12930.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
