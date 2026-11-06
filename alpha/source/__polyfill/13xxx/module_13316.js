// Module ID: 13316
// Function ID: 13317
// Dependencies: [13302, 13261, 13299]
// Exports: createCheckInEnvelope

// Module 13316
import _mod13261 from "module_13261" /* 13261 */;
import _mod13299 from "module_13299" /* 13299 */;
import _mod13302 from "module_13302" /* 13302 */;


export function createCheckInEnvelope(arg0, arg1, sdk, arg3, arg4) {
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
    const obj4 = _mod13302;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13261;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13299;
  return obj6.createEnvelope(obj, items1);
}
