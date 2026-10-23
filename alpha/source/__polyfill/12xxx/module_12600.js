// Module ID: 12600
// Function ID: 12601
// Dependencies: [12586, 12545, 12583]
// Exports: createCheckInEnvelope

// Module 12600
import _mod12545 from "module_12545" /* 12545 */;
import _mod12583 from "module_12583" /* 12583 */;
import _mod12586 from "module_12586" /* 12586 */;


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
    const obj4 = _mod12586;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12545;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12583;
  return obj6.createEnvelope(obj, items1);
};
