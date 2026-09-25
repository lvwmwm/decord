// Module ID: 12356
// Function ID: 12357
// Dependencies: [12342, 12301, 12339]
// Exports: createCheckInEnvelope

// Module 12356
import _mod12301 from "module_12301" /* 12301 */;
import _mod12339 from "module_12339" /* 12339 */;
import _mod12342 from "module_12342" /* 12342 */;

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
    obj.dsn = _mod12342.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12301.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12339.createEnvelope(obj, items1);
};
