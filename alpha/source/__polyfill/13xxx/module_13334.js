// Module ID: 13334
// Function ID: 13335
// Dependencies: [13320, 13279, 13317]
// Exports: createCheckInEnvelope

// Module 13334
import _mod13279 from "module_13279" /* 13279 */;
import _mod13317 from "module_13317" /* 13317 */;
import _mod13320 from "module_13320" /* 13320 */;


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
    const obj4 = _mod13320;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13279;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13317;
  return obj6.createEnvelope(obj, items1);
}
