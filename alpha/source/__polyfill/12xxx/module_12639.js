// Module ID: 12639
// Function ID: 12640
// Dependencies: [12625, 12584, 12622]
// Exports: createCheckInEnvelope

// Module 12639
import _mod12584 from "module_12584" /* 12584 */;
import _mod12622 from "module_12622" /* 12622 */;
import _mod12625 from "module_12625" /* 12625 */;


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
    const obj4 = _mod12625;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = arg1;
  if (tmp5) {
    const obj5 = _mod12584;
    obj.trace = obj5.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12622;
  return obj6.createEnvelope(obj, items1);
};
