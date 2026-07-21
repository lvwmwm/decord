// Module ID: 870
// Function ID: 9686
// Name: createCheckInEnvelope
// Dependencies: []

// Module 870 (createCheckInEnvelope)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createCheckInEnvelope = function createCheckInEnvelope(arg0, trace, sdk) {
  let tmp = arg3;
  let obj = { sent_at: new Date().toISOString() };
  if (tmp2) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  if (tmp) {
    tmp = arg4;
  }
  if (tmp) {
    obj.dsn = trace(arg6[0]).dsnToString(arg4);
    const obj4 = trace(arg6[0]);
  }
  if (trace) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const tmp2 = null != sdk && sdk.sdk;
  const items1 = [items];
  return trace(arg6[1]).createEnvelope(obj, items1);
};
