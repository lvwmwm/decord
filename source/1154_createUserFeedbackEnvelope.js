// Module ID: 1154
// Function ID: 13133
// Name: createUserFeedbackEnvelope
// Dependencies: []

// Module 1154 (createUserFeedbackEnvelope)
arg5.header = 0;
arg5.items = 1;
arg5.createUserFeedbackEnvelope = function createUserFeedbackEnvelope(event_id, tunnel) {
  let dsn;
  let metadata;
  ({ metadata, dsn } = tunnel);
  let obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let sdk;
  if (null != metadata) {
    sdk = metadata.sdk;
  }
  if (sdk) {
    obj = {};
    obj = { name: metadata.sdk.name, version: metadata.sdk.version };
    obj.sdk = obj;
    sdk = obj;
  }
  let tmp4 = !tmp3;
  const merged = Object.assign(obj, sdk);
  if (!!tunnel.tunnel) {
    tmp4 = dsn;
  }
  if (tmp4) {
    const obj1 = { dsn: tunnel(arg6[0]).dsnToString(dsn) };
    tmp4 = obj1;
    const obj6 = tunnel(arg6[0]);
  }
  const items = [{ type: "user_report" }, event_id];
  const merged1 = Object.assign(merged, tmp4);
  const date = new Date();
  const items1 = [items];
  return tunnel(arg6[0]).createEnvelope(merged1, items1);
};
