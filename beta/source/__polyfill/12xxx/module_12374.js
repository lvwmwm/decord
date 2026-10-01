// Module ID: 12374
// Function ID: 12375
// Dependencies: [12360, 12319, 12357]
// Exports: createCheckInEnvelope

// Module 12374
import _mod12319 from "module_12319" /* 12319 */;
import _mod12357 from "module_12357" /* 12357 */;
import _mod12360 from "module_12360" /* 12360 */;


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
    const obj4 = _mod12360;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12319;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12357;
  return obj6.createEnvelope(obj, items1);
};
