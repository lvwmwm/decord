// Module ID: 13188
// Function ID: 13189
// Name: captureAggregateMetrics
// Dependencies: [13085, 13132, 13129, 13186]
// Exports: captureAggregateMetrics

// Module 13188 (captureAggregateMetrics)
import _mod13085 from "module_13085" /* 13085 */;
import _mod13129 from "module_13129" /* 13129 */;
import _mod13132 from "module_13132" /* 13132 */;
import _mod13186 from "module_13186" /* 13186 */;

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
    obj.dsn = _mod13132.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod13186.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod13129.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod13085.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
