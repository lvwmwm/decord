// Module ID: 13353
// Function ID: 13354
// Dependencies: [13339, 13298, 13336]
// Exports: createCheckInEnvelope

// Module 13353
import _mod13298 from "module_13298" /* 13298 */;
import _mod13336 from "module_13336" /* 13336 */;
import _mod13339 from "module_13339" /* 13339 */;


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
    const obj4 = _mod13339;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13298;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13336;
  return obj6.createEnvelope(obj, items1);
}
