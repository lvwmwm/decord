// Module ID: 12672
// Function ID: 12673
// Dependencies: [12658, 12617, 12655]
// Exports: createCheckInEnvelope

// Module 12672
import _mod12617 from "module_12617" /* 12617 */;
import _mod12655 from "module_12655" /* 12655 */;
import _mod12658 from "module_12658" /* 12658 */;


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
    const obj4 = _mod12658;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12617;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12655;
  return obj6.createEnvelope(obj, items1);
};
