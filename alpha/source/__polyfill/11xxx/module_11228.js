// Module ID: 11228
// Function ID: 11229
// Dependencies: [11214, 11173, 11211]
// Exports: createCheckInEnvelope

// Module 11228
import _mod11173 from "module_11173" /* 11173 */;
import _mod11211 from "module_11211" /* 11211 */;
import _mod11214 from "module_11214" /* 11214 */;


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
    const obj4 = _mod11214;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod11173;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod11211;
  return obj6.createEnvelope(obj, items1);
};
