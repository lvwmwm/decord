// Module ID: 13206
// Function ID: 13207
// Dependencies: [13192, 13151, 13189]
// Exports: createCheckInEnvelope

// Module 13206
import _mod13151 from "module_13151" /* 13151 */;
import _mod13189 from "module_13189" /* 13189 */;
import _mod13192 from "module_13192" /* 13192 */;

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
    obj.dsn = _mod13192.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13151.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13189.createEnvelope(obj, items1);
};
