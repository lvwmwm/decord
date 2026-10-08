// Module ID: 11054
// Function ID: 11055
// Dependencies: [11040, 10999, 11037]
// Exports: createCheckInEnvelope

// Module 11054
import _mod10999 from "module_10999" /* 10999 */;
import _mod11037 from "module_11037" /* 11037 */;
import _mod11040 from "module_11040" /* 11040 */;


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
    const obj4 = _mod11040;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod10999;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod11037;
  return obj6.createEnvelope(obj, items1);
};
