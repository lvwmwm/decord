// Module ID: 11269
// Function ID: 11270
// Dependencies: [11255, 11214, 11252]
// Exports: createCheckInEnvelope

// Module 11269
import _mod11214 from "module_11214" /* 11214 */;
import _mod11252 from "module_11252" /* 11252 */;
import _mod11255 from "module_11255" /* 11255 */;


export const createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk, arg3, arg4) {
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
    const obj4 = _mod11255;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod11214;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod11252;
  return obj6.createEnvelope(obj, items1);
};
