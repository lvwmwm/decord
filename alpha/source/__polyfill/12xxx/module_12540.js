// Module ID: 12540
// Function ID: 12541
// Dependencies: [12526, 12485, 12523]
// Exports: createCheckInEnvelope

// Module 12540
import _mod12485 from "module_12485" /* 12485 */;
import _mod12523 from "module_12523" /* 12523 */;
import _mod12526 from "module_12526" /* 12526 */;


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
    const obj4 = _mod12526;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12485;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12523;
  return obj6.createEnvelope(obj, items1);
};
