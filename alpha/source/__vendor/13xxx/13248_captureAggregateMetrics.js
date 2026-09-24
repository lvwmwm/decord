// Module ID: 13248
// Function ID: 13249
// Name: captureAggregateMetrics
// Dependencies: [13145, 13192, 13189, 13246]
// Exports: captureAggregateMetrics

// Module 13248 (captureAggregateMetrics)
import _mod13145 from "module_13145" /* 13145 */;
import _mod13189 from "module_13189" /* 13189 */;
import _mod13192 from "module_13192" /* 13192 */;
import _mod13246 from "module_13246" /* 13246 */;

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
    obj.dsn = _mod13192.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod13246.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod13189.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod13145.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
