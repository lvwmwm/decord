// Module ID: 12372
// Function ID: 12373
// Dependencies: [12358, 12317, 12355]
// Exports: createCheckInEnvelope

// Module 12372
import _mod12317 from "module_12317" /* 12317 */;
import _mod12355 from "module_12355" /* 12355 */;
import _mod12358 from "module_12358" /* 12358 */;


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
    const obj4 = _mod12358;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12317;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12355;
  return obj6.createEnvelope(obj, items1);
};
