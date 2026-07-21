// Module ID: 7291
// Function ID: 58822
// Name: createCheckInEnvelope
// Dependencies: []

// Module 7291 (createCheckInEnvelope)
arg5.createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk) {
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
    tmp = arg4;
  }
  if (tmp) {
    obj.dsn = arg1(arg6[0]).dsnToString(arg4);
    const obj4 = arg1(arg6[0]);
  }
  if (arg1) {
    obj.trace = arg1(arg6[1]).dropUndefinedKeys(arg1);
    const obj5 = arg1(arg6[1]);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return arg1(arg6[2]).createEnvelope(obj, items1);
};
