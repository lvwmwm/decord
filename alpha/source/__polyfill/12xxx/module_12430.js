// Module ID: 12430
// Function ID: 12431
// Dependencies: [12416, 12375, 12413]
// Exports: createCheckInEnvelope

// Module 12430
import _mod12375 from "module_12375" /* 12375 */;
import _mod12413 from "module_12413" /* 12413 */;
import _mod12416 from "module_12416" /* 12416 */;


export const createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk, arg3, arg4) {
  let date;
  const obj = { sent_at: date.toISOString() };
  date = new Date();
  const tmp = sdk && sdk.sdk;
  if (tmp) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = arg3 && arg4;
  if (tmp2) {
    const obj4 = _mod12416;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12375;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12413;
  return obj6.createEnvelope(obj, items1);
};
