// Module ID: 1050
// Function ID: 11253
// Name: createUserFeedbackEnvelope
// Dependencies: []

// Module 1050 (createUserFeedbackEnvelope)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
  let tmp3 = !tmp2;
  if (!!tunnel.tunnel) {
    tmp3 = dsn;
  }
  if (tmp3) {
    const obj1 = { dsn: tunnel(arg6[0]).dsnToString(dsn) };
    tmp3 = obj1;
    const obj6 = tunnel(arg6[0]);
  }
  const items = [{ type: "user_report" }, event_id];
  const merged = Object.assign(obj, sdk, tmp3);
  const date = new Date();
  const items1 = [items];
  return tunnel(arg6[0]).createEnvelope(merged, items1);
};
