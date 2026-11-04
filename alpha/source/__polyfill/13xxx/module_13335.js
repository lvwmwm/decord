// Module ID: 13335
// Function ID: 13336
// Dependencies: [13321, 13280, 13318]
// Exports: createCheckInEnvelope

// Module 13335
import _mod13280 from "module_13280" /* 13280 */;
import _mod13318 from "module_13318" /* 13318 */;
import _mod13321 from "module_13321" /* 13321 */;


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
    const obj4 = _mod13321;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13280;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13318;
  return obj6.createEnvelope(obj, items1);
}
