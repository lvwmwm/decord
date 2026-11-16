// Module ID: 13371
// Function ID: 13372
// Dependencies: [13357, 13316, 13354]
// Exports: createCheckInEnvelope

// Module 13371
import _mod13316 from "module_13316" /* 13316 */;
import _mod13354 from "module_13354" /* 13354 */;
import _mod13357 from "module_13357" /* 13357 */;


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
    const obj4 = _mod13357;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13316;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13354;
  return obj6.createEnvelope(obj, items1);
}
