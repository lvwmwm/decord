// Module ID: 12067
// Function ID: 12068
// Dependencies: [12053, 12012, 12050]
// Exports: createCheckInEnvelope

// Module 12067
import _mod12012 from "module_12012" /* 12012 */;
import _mod12050 from "module_12050" /* 12050 */;
import _mod12053 from "module_12053" /* 12053 */;


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
    const obj4 = _mod12053;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12012;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12050;
  return obj6.createEnvelope(obj, items1);
};
