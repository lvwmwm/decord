// Module ID: 6372
// Function ID: 57361
// Name: createCheckInEnvelope
// Dependencies: [6358, 6317, 6355]

// Module 6372 (createCheckInEnvelope)
const require = arg1;
const dependencyMap = arg6;
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
    obj.dsn = require(6358) /* dsnFromString */.dsnToString(arg4);
    const obj4 = require(6358) /* dsnFromString */;
  }
  if (arg1) {
    obj.trace = require(6317) /* addNonEnumerableProperty */.dropUndefinedKeys(arg1);
    const obj5 = require(6317) /* addNonEnumerableProperty */;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return require(6355) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};
