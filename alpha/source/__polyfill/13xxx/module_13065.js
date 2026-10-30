// Module ID: 13065
// Function ID: 13066
// Dependencies: [13051, 13010, 13048]
// Exports: createCheckInEnvelope

// Module 13065
import _mod13010 from "module_13010" /* 13010 */;
import _mod13048 from "module_13048" /* 13048 */;
import _mod13051 from "module_13051" /* 13051 */;


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
    const obj4 = _mod13051;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod13010;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod13048;
  return obj6.createEnvelope(obj, items1);
}
