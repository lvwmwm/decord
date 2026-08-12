// Module ID: 7556
// Function ID: 7557
// Name: createCheckInEnvelope
// Dependencies: [7542, 7501, 7539]

// Module 7556 (createCheckInEnvelope)
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
    obj.dsn = require(7542) /* dsnFromString */.dsnToString(arg4);
    const obj4 = require(7542) /* dsnFromString */;
  }
  if (arg1) {
    obj.trace = require(7501) /* addNonEnumerableProperty */.dropUndefinedKeys(arg1);
    const obj5 = require(7501) /* addNonEnumerableProperty */;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return require(7539) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
