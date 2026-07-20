// Module ID: 7329
// Function ID: 59126
// Name: createMetricEnvelope
// Dependencies: [4294967295, 0, 0, 4294967295]

// Module 7329 (createMetricEnvelope)
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
    obj.dsn = arg1(arg6[1]).dsnToString(arg1);
    const obj4 = arg1(arg6[1]);
  }
  const date = new Date();
  const result = arg1(arg6[3]).serializeMetricBuckets(arg0);
  obj = { type: "statsd", length: result.length };
  const items = [obj, result];
  const obj5 = arg1(arg6[3]);
  const items1 = [items];
  return arg1(arg6[2]).createEnvelope(obj, items1);
}
arg5.captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = arr(arg6[0]).logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
arg5.createMetricEnvelope = createMetricEnvelope;
