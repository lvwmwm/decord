// Module ID: 9858
// Function ID: 9859
// Dependencies: [9844, 9803, 9841]
// Exports: createCheckInEnvelope

// Module 9858
import _mod9803 from "module_9803" /* 9803 */;
import _mod9841 from "module_9841" /* 9841 */;
import _mod9844 from "module_9844" /* 9844 */;


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
    const obj4 = _mod9844;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod9803;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod9841;
  return obj6.createEnvelope(obj, items1);
}
