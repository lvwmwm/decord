// Module ID: 12442
// Function ID: 12443
// Dependencies: [12428, 12387, 12425]
// Exports: createCheckInEnvelope

// Module 12442
import _mod12387 from "module_12387" /* 12387 */;
import _mod12425 from "module_12425" /* 12425 */;
import _mod12428 from "module_12428" /* 12428 */;


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
    const obj4 = _mod12428;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12387;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12425;
  return obj6.createEnvelope(obj, items1);
};
