// Module ID: 12365
// Function ID: 12366
// Dependencies: [12351, 12310, 12348]
// Exports: createCheckInEnvelope

// Module 12365
import _mod12310 from "module_12310" /* 12310 */;
import _mod12348 from "module_12348" /* 12348 */;
import _mod12351 from "module_12351" /* 12351 */;


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
    const obj4 = _mod12351;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12310;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12348;
  return obj6.createEnvelope(obj, items1);
};
