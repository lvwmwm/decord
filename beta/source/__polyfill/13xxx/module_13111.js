// Module ID: 13111
// Function ID: 13112
// Dependencies: [13097, 13056, 13094]
// Exports: createCheckInEnvelope

// Module 13111
import _mod13056 from "module_13056" /* 13056 */;
import _mod13094 from "module_13094" /* 13094 */;
import _mod13097 from "module_13097" /* 13097 */;

require = arg1;
const dependencyMap = arg6;

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk, arg3, arg4) {
  const obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg4;
  }
  if (tmp) {
    obj.dsn = _mod13097.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13056.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13094.createEnvelope(obj, items1);
};
