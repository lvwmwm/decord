// Module ID: 12626
// Function ID: 12627
// Dependencies: [12612, 12571, 12609]
// Exports: createCheckInEnvelope

// Module 12626
import _mod12571 from "module_12571" /* 12571 */;
import _mod12609 from "module_12609" /* 12609 */;
import _mod12612 from "module_12612" /* 12612 */;


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
    const obj4 = _mod12612;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12571;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12609;
  return obj6.createEnvelope(obj, items1);
};
