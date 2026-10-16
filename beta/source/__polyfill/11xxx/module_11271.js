// Module ID: 11271
// Function ID: 11272
// Dependencies: [11257, 11216, 11254]
// Exports: createCheckInEnvelope

// Module 11271
import _mod11216 from "module_11216" /* 11216 */;
import _mod11254 from "module_11254" /* 11254 */;
import _mod11257 from "module_11257" /* 11257 */;


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
    const obj4 = _mod11257;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod11216;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod11254;
  return obj6.createEnvelope(obj, items1);
};
