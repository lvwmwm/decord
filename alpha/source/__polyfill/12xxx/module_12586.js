// Module ID: 12586
// Function ID: 12587
// Dependencies: [12572, 12531, 12569]
// Exports: createCheckInEnvelope

// Module 12586
import _mod12531 from "module_12531" /* 12531 */;
import _mod12569 from "module_12569" /* 12569 */;
import _mod12572 from "module_12572" /* 12572 */;

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
    obj.dsn = _mod12572.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12531.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12569.createEnvelope(obj, items1);
};
