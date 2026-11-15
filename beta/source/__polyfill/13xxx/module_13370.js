// Module ID: 13370
// Function ID: 13371
// Dependencies: [13356, 13315, 13353]
// Exports: createCheckInEnvelope

// Module 13370
import _mod13315 from "module_13315" /* 13315 */;
import _mod13353 from "module_13353" /* 13353 */;
import _mod13356 from "module_13356" /* 13356 */;


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
    const obj4 = _mod13356;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13315;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13353;
  return obj6.createEnvelope(obj, items1);
}
