// Module ID: 759
// Function ID: 760
// Dependencies: [702, 729]
// Exports: createCheckInEnvelope

// Module 759
import _mod702 from "module_702" /* 702 */;
import _mod729 from "module_729" /* 729 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, trace, sdk, arg3, arg4) {
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
    const obj4 = _mod702;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = trace;
  if (tmp5) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj5 = _mod729;
  return obj5.createEnvelope(obj, items1);
};
