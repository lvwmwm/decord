// Module ID: 12650
// Function ID: 12651
// Dependencies: [12636, 12595, 12633]
// Exports: createCheckInEnvelope

// Module 12650
import _mod12595 from "module_12595" /* 12595 */;
import _mod12633 from "module_12633" /* 12633 */;
import _mod12636 from "module_12636" /* 12636 */;


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
    const obj4 = _mod12636;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12595;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12633;
  return obj6.createEnvelope(obj, items1);
};
