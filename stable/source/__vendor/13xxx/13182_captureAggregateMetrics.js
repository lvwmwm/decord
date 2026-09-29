// Module ID: 13182
// Function ID: 13183
// Name: captureAggregateMetrics
// Dependencies: [13079, 13126, 13123, 13180]
// Exports: captureAggregateMetrics

// Module 13182 (captureAggregateMetrics)
import _mod13079 from "module_13079" /* 13079 */;
import _mod13123 from "module_13123" /* 13123 */;
import _mod13126 from "module_13126" /* 13126 */;
import _mod13180 from "module_13180" /* 13180 */;

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
    obj.dsn = _mod13126.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod13180.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod13123.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod13079.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
