// Module ID: 12587
// Function ID: 12588
// Name: captureAggregateMetrics
// Dependencies: [12484, 12531, 12528, 12585]
// Exports: captureAggregateMetrics

// Module 12587 (captureAggregateMetrics)
import _mod12484 from "module_12484" /* 12484 */;
import _mod12528 from "module_12528" /* 12528 */;
import _mod12531 from "module_12531" /* 12531 */;
import _mod12585 from "module_12585" /* 12585 */;

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
    obj.dsn = _mod12531.dsnToString(arg1);
  }
  const date = new Date();
  const result = _mod12585.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12528.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12484.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
