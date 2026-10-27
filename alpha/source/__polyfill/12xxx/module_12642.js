// Module ID: 12642
// Function ID: 12643
// Dependencies: [12628, 12587, 12625]
// Exports: createCheckInEnvelope

// Module 12642
import _mod12587 from "module_12587" /* 12587 */;
import _mod12625 from "module_12625" /* 12625 */;
import _mod12628 from "module_12628" /* 12628 */;


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
    const obj4 = _mod12628;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12587;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12625;
  return obj6.createEnvelope(obj, items1);
};
