// Module ID: 12467
// Function ID: 12468
// Dependencies: [12453, 12412, 12450]
// Exports: createCheckInEnvelope

// Module 12467
import _mod12412 from "module_12412" /* 12412 */;
import _mod12450 from "module_12450" /* 12450 */;
import _mod12453 from "module_12453" /* 12453 */;


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
    const obj4 = _mod12453;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12412;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12450;
  return obj6.createEnvelope(obj, items1);
};
