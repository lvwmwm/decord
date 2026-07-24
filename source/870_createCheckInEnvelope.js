// Module ID: 870
// Function ID: 9688
// Name: createCheckInEnvelope
// Dependencies: [814, 840]

// Module 870 (createCheckInEnvelope)
const require = arg1;
const dependencyMap = arg6;
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
    obj.dsn = require(814) /* dsnFromString */.dsnToString(arg4);
    const obj4 = require(814) /* dsnFromString */;
  }
  if (trace) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  tmp2 = null != sdk && sdk.sdk;
  const items1 = [items];
  return require(840) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
