// Module ID: 9871
// Function ID: 9872
// Dependencies: [9857, 9816, 9854]
// Exports: createCheckInEnvelope

// Module 9871
import _mod9816 from "module_9816" /* 9816 */;
import _mod9854 from "module_9854" /* 9854 */;
import _mod9857 from "module_9857" /* 9857 */;


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
    const obj4 = _mod9857;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod9816;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod9854;
  return obj6.createEnvelope(obj, items1);
}
