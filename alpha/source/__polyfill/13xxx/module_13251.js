// Module ID: 13251
// Function ID: 13252
// Dependencies: [13237, 13196, 13234]
// Exports: createCheckInEnvelope

// Module 13251
import _mod13196 from "module_13196" /* 13196 */;
import _mod13234 from "module_13234" /* 13234 */;
import _mod13237 from "module_13237" /* 13237 */;


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
    const obj4 = _mod13237;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13196;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13234;
  return obj6.createEnvelope(obj, items1);
}
