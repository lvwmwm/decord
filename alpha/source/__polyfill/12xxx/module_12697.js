// Module ID: 12697
// Function ID: 12698
// Dependencies: [12683, 12642, 12680]
// Exports: createCheckInEnvelope

// Module 12697
import _mod12642 from "module_12642" /* 12642 */;
import _mod12680 from "module_12680" /* 12680 */;
import _mod12683 from "module_12683" /* 12683 */;


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
    const obj4 = _mod12683;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12642;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12680;
  return obj6.createEnvelope(obj, items1);
};
