// Module ID: 12103
// Function ID: 12104
// Dependencies: [12089, 12048, 12086]
// Exports: createCheckInEnvelope

// Module 12103
import _mod12048 from "module_12048" /* 12048 */;
import _mod12086 from "module_12086" /* 12086 */;
import _mod12089 from "module_12089" /* 12089 */;


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
    const obj4 = _mod12089;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12048;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12086;
  return obj6.createEnvelope(obj, items1);
};
