// Module ID: 13339
// Function ID: 13340
// Dependencies: [13325, 13284, 13322]
// Exports: createCheckInEnvelope

// Module 13339
import _mod13284 from "module_13284" /* 13284 */;
import _mod13322 from "module_13322" /* 13322 */;
import _mod13325 from "module_13325" /* 13325 */;


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
    const obj4 = _mod13325;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13284;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13322;
  return obj6.createEnvelope(obj, items1);
}
