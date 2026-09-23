// Module ID: 13197
// Function ID: 13198
// Dependencies: [13183, 13142, 13180]
// Exports: createCheckInEnvelope

// Module 13197
import _mod13142 from "module_13142" /* 13142 */;
import _mod13180 from "module_13180" /* 13180 */;
import _mod13183 from "module_13183" /* 13183 */;

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
    obj.dsn = _mod13183.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod13142.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13180.createEnvelope(obj, items1);
};
