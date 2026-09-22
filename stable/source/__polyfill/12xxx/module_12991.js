// Module ID: 12991
// Function ID: 12992
// Dependencies: [12977, 12936, 12974]
// Exports: createCheckInEnvelope

// Module 12991
import _mod12936 from "module_12936" /* 12936 */;
import _mod12974 from "module_12974" /* 12974 */;
import _mod12977 from "module_12977" /* 12977 */;

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
    obj.dsn = _mod12977.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12936.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12974.createEnvelope(obj, items1);
};
