// Module ID: 13146
// Function ID: 13147
// Dependencies: [13132, 13091, 13129]
// Exports: createCheckInEnvelope

// Module 13146
import _mod13091 from "module_13091" /* 13091 */;
import _mod13129 from "module_13129" /* 13129 */;
import _mod13132 from "module_13132" /* 13132 */;

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
    obj.dsn = _mod13132.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13091.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13129.createEnvelope(obj, items1);
};
