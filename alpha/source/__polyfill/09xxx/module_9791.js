// Module ID: 9791
// Function ID: 9792
// Dependencies: [9777, 9736, 9774]
// Exports: createCheckInEnvelope

// Module 9791
import _mod9736 from "module_9736" /* 9736 */;
import _mod9774 from "module_9774" /* 9774 */;
import _mod9777 from "module_9777" /* 9777 */;


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
    const obj4 = _mod9777;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod9736;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod9774;
  return obj6.createEnvelope(obj, items1);
}
