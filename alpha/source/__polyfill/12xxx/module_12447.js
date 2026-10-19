// Module ID: 12447
// Function ID: 12448
// Dependencies: [12433, 12392, 12430]
// Exports: createCheckInEnvelope

// Module 12447
import _mod12392 from "module_12392" /* 12392 */;
import _mod12430 from "module_12430" /* 12430 */;
import _mod12433 from "module_12433" /* 12433 */;


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
    const obj4 = _mod12433;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12392;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12430;
  return obj6.createEnvelope(obj, items1);
};
