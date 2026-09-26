// Module ID: 12374
// Function ID: 12375
// Dependencies: [12360, 12319, 12357]
// Exports: createCheckInEnvelope

// Module 12374
import _mod12319 from "module_12319" /* 12319 */;
import _mod12357 from "module_12357" /* 12357 */;
import _mod12360 from "module_12360" /* 12360 */;

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
    obj.dsn = _mod12360.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12319.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12357.createEnvelope(obj, items1);
};
