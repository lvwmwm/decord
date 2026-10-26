// Module ID: 12640
// Function ID: 12641
// Dependencies: [12626, 12585, 12623]
// Exports: createCheckInEnvelope

// Module 12640
import _mod12585 from "module_12585" /* 12585 */;
import _mod12623 from "module_12623" /* 12623 */;
import _mod12626 from "module_12626" /* 12626 */;


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
    const obj4 = _mod12626;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12585;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12623;
  return obj6.createEnvelope(obj, items1);
};
