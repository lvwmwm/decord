// Module ID: 9792
// Function ID: 9793
// Dependencies: [9778, 9737, 9775]
// Exports: createCheckInEnvelope

// Module 9792
import _mod9737 from "module_9737" /* 9737 */;
import _mod9775 from "module_9775" /* 9775 */;
import _mod9778 from "module_9778" /* 9778 */;


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
    const obj4 = _mod9778;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod9737;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod9775;
  return obj6.createEnvelope(obj, items1);
}
