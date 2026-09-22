// Module ID: 13157
// Function ID: 13158
// Name: captureAggregateMetrics
// Dependencies: [13054, 13101, 13098, 13155]
// Exports: captureAggregateMetrics

// Module 13157 (captureAggregateMetrics)
import _mod13054 from "module_13054" /* 13054 */;
import _mod13098 from "module_13098" /* 13098 */;
import _mod13101 from "module_13101" /* 13101 */;
import _mod13155 from "module_13155" /* 13155 */;

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
    obj.dsn = _mod13101.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod13155.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod13098.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod13054.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
