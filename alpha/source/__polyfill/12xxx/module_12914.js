// Module ID: 12914
// Function ID: 12915
// Dependencies: [12900, 12859, 12897]
// Exports: createCheckInEnvelope

// Module 12914
import _mod12859 from "module_12859" /* 12859 */;
import _mod12897 from "module_12897" /* 12897 */;
import _mod12900 from "module_12900" /* 12900 */;


export function createCheckInEnvelope(arg0, arg1, sdk, arg3, arg4) {
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
    const obj4 = _mod12900;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12859;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12897;
  return obj6.createEnvelope(obj, items1);
}
