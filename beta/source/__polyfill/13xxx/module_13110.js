// Module ID: 13110
// Function ID: 13111
// Dependencies: [13096, 13055, 13093]
// Exports: createCheckInEnvelope

// Module 13110
import _mod13055 from "module_13055" /* 13055 */;
import _mod13093 from "module_13093" /* 13093 */;
import _mod13096 from "module_13096" /* 13096 */;

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
    obj.dsn = _mod13096.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13055.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13093.createEnvelope(obj, items1);
};
