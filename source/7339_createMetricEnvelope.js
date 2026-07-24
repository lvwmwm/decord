// Module ID: 7339
// Function ID: 59223
// Name: createMetricEnvelope
// Dependencies: [7236, 7283, 7280, 7337]

// Module 7339 (createMetricEnvelope)
const require = arg1;
const dependencyMap = arg6;
function createMetricEnvelope(arg0, arg1, sdk) {
  let tmp = arg3;
  let obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  if (tmp) {
    tmp = arg1;
  }
  if (tmp) {
    obj.dsn = require(7283) /* dsnFromString */.dsnToString(arg1);
    const obj4 = require(7283) /* dsnFromString */;
  }
  const date = new Date();
  const result = require(7337) /* sanitizeTagKey */.serializeMetricBuckets(arg0);
  obj = { type: "statsd", length: result.length };
  const items = [obj, result];
  const obj5 = require(7337) /* sanitizeTagKey */;
  const items1 = [items];
  return require(7280) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
}
arg5.captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = require(7236) /* consoleSandbox */.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
arg5.createMetricEnvelope = createMetricEnvelope;
