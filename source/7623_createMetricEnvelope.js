// Module ID: 7623
// Function ID: 7624
// Name: createMetricEnvelope
// Dependencies: [7520, 7567, 7564, 7621]

// Module 7623 (createMetricEnvelope)
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
    obj.dsn = require(7567) /* dsnFromString */.dsnToString(arg1);
    const obj4 = require(7567) /* dsnFromString */;
  }
  const date = new Date();
  const result = require(7621) /* items */.serializeMetricBuckets(arg0);
  obj = { type: "statsd", length: result.length };
  const items = [obj, result];
  const obj5 = require(7621) /* items */;
  const items1 = [items];
  return require(7564) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
}
arg5.captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = require(7520) /* consoleSandbox */.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
arg5.createMetricEnvelope = createMetricEnvelope;
