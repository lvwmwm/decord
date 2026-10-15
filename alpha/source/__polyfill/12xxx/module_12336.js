// Module ID: 12336
// Function ID: 12337
// Dependencies: [12322, 12281, 12319]
// Exports: createCheckInEnvelope

// Module 12336
import _mod12281 from "module_12281" /* 12281 */;
import _mod12319 from "module_12319" /* 12319 */;
import _mod12322 from "module_12322" /* 12322 */;


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
    const obj4 = _mod12322;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12281;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12319;
  return obj6.createEnvelope(obj, items1);
};
