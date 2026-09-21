// Module ID: 13152
// Function ID: 13153
// Name: captureAggregateMetrics
// Dependencies: [13049, 13096, 13093, 13150]
// Exports: captureAggregateMetrics

// Module 13152 (captureAggregateMetrics)
import _mod13049 from "module_13049" /* 13049 */;
import _mod13093 from "module_13093" /* 13093 */;
import _mod13096 from "module_13096" /* 13096 */;
import _mod13150 from "module_13150" /* 13150 */;

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
    obj.dsn = _mod13096.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod13150.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod13093.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod13049.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
