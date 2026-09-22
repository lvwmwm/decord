// Module ID: 13115
// Function ID: 13116
// Dependencies: [13101, 13060, 13098]
// Exports: createCheckInEnvelope

// Module 13115
import _mod13060 from "module_13060" /* 13060 */;
import _mod13098 from "module_13098" /* 13098 */;
import _mod13101 from "module_13101" /* 13101 */;

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
    obj.dsn = _mod13101.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13060.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13098.createEnvelope(obj, items1);
};
