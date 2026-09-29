// Module ID: 13140
// Function ID: 13141
// Dependencies: [13126, 13085, 13123]
// Exports: createCheckInEnvelope

// Module 13140
import _mod13085 from "module_13085" /* 13085 */;
import _mod13123 from "module_13123" /* 13123 */;
import _mod13126 from "module_13126" /* 13126 */;

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
    obj.dsn = _mod13126.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13085.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13123.createEnvelope(obj, items1);
};
