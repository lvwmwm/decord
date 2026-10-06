// Module ID: 12641
// Function ID: 12642
// Dependencies: [12627, 12586, 12624]
// Exports: createCheckInEnvelope

// Module 12641
import _mod12586 from "module_12586" /* 12586 */;
import _mod12624 from "module_12624" /* 12624 */;
import _mod12627 from "module_12627" /* 12627 */;


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
    const obj4 = _mod12627;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12586;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12624;
  return obj6.createEnvelope(obj, items1);
};
