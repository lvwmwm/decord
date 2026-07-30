// Module ID: 6468
// Function ID: 6469
// Name: createMetricEnvelope
// Dependencies: [6365, 6412, 6409, 6466]

// Module 6468 (createMetricEnvelope)
const require = arg1;
const dependencyMap = arg6;
function createMetricEnvelope(arg0, arg1, sdk) {
  let obj = { sent_at: null };
  obj[0] = new Date().toISOString();
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: null, version: null };
    obj[0] = sdk.sdk.name;
    obj[1] = sdk.sdk.version;
    obj.sdk = obj;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg1;
  }
  if (tmp) {
    obj.dsn = require(6412) /* dsnFromString */.dsnToString(arg1);
    const obj4 = require(6412) /* dsnFromString */;
  }
  const date = new Date();
  const result = require(6466) /* items */.serializeMetricBuckets(arg0);
  obj = { type: "statsd", length: result.length };
  const items = [obj, result];
  const obj5 = require(6466) /* items */;
  const items1 = [items];
  return require(6409) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
}
arg5.captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = require(6365) /* consoleSandbox */.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
arg5.createMetricEnvelope = createMetricEnvelope;
