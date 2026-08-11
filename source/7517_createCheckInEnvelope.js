// Module ID: 7517
// Function ID: 7518
// Name: createCheckInEnvelope
// Dependencies: [7503, 7462, 7500]

// Module 7517 (createCheckInEnvelope)
const require = arg1;
const dependencyMap = arg6;
arg5.createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk) {
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
    tmp = arg4;
  }
  if (tmp) {
    obj.dsn = require(7503) /* dsnFromString */.dsnToString(arg4);
    const obj4 = require(7503) /* dsnFromString */;
  }
  if (arg1) {
    obj.trace = require(7462) /* addNonEnumerableProperty */.dropUndefinedKeys(arg1);
    const obj5 = require(7462) /* addNonEnumerableProperty */;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return require(7500) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
