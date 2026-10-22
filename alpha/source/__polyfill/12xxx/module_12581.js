// Module ID: 12581
// Function ID: 12582
// Dependencies: [12567, 12526, 12564]
// Exports: createCheckInEnvelope

// Module 12581
import _mod12526 from "module_12526" /* 12526 */;
import _mod12564 from "module_12564" /* 12564 */;
import _mod12567 from "module_12567" /* 12567 */;


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
    const obj4 = _mod12567;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12526;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12564;
  return obj6.createEnvelope(obj, items1);
};
