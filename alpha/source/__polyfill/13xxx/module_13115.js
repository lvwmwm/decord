// Module ID: 13115
// Function ID: 13116
// Dependencies: [13101, 13060, 13098]
// Exports: createCheckInEnvelope

// Module 13115
import _mod13060 from "module_13060" /* 13060 */;
import _mod13098 from "module_13098" /* 13098 */;
import _mod13101 from "module_13101" /* 13101 */;


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
    const obj4 = _mod13101;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13060;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13098;
  return obj6.createEnvelope(obj, items1);
}
