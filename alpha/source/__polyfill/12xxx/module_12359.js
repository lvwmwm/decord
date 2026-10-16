// Module ID: 12359
// Function ID: 12360
// Dependencies: [12345, 12304, 12342]
// Exports: createCheckInEnvelope

// Module 12359
import _mod12304 from "module_12304" /* 12304 */;
import _mod12342 from "module_12342" /* 12342 */;
import _mod12345 from "module_12345" /* 12345 */;


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
    const obj4 = _mod12345;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12304;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12342;
  return obj6.createEnvelope(obj, items1);
};
