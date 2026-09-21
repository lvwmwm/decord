// Module ID: 13153
// Function ID: 13154
// Name: captureAggregateMetrics
// Dependencies: [13050, 13097, 13094, 13151]
// Exports: captureAggregateMetrics

// Module 13153 (captureAggregateMetrics)
import _mod13050 from "module_13050" /* 13050 */;
import _mod13094 from "module_13094" /* 13094 */;
import _mod13097 from "module_13097" /* 13097 */;
import _mod13151 from "module_13151" /* 13151 */;

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
    obj.dsn = _mod13097.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod13151.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod13094.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod13050.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
