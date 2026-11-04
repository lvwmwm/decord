// Module ID: 758
// Function ID: 759
// Dependencies: [701, 728]
// Exports: createCheckInEnvelope

// Module 758
import _mod701 from "module_701" /* 701 */;
import _mod728 from "module_728" /* 728 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function createCheckInEnvelope(arg0, trace, sdk, arg3, arg4) {
  let date;
  const obj = { sent_at: date.toISOString() };
  sdk = undefined;
  date = new Date();
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = arg3 && arg4;
  if (tmp2) {
    const obj4 = _mod701;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = trace;
  if (tmp5) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj5 = _mod728;
  return obj5.createEnvelope(obj, items1);
}
