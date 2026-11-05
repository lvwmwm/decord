// Module ID: 13342
// Function ID: 13343
// Dependencies: [13328, 13287, 13325]
// Exports: createCheckInEnvelope

// Module 13342
import _mod13287 from "module_13287" /* 13287 */;
import _mod13325 from "module_13325" /* 13325 */;
import _mod13328 from "module_13328" /* 13328 */;


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
    const obj4 = _mod13328;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13287;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13325;
  return obj6.createEnvelope(obj, items1);
}
