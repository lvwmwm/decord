// Module ID: 771
// Function ID: 772
// Dependencies: [714, 741]
// Exports: createCheckInEnvelope

// Module 771
import _mod714 from "module_714" /* 714 */;
import _mod741 from "module_741" /* 741 */;

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
    const obj4 = _mod714;
    obj.dsn = obj4.dsnToString(arg4);
  }
  const tmp5 = trace;
  if (tmp5) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj5 = _mod741;
  return obj5.createEnvelope(obj, items1);
};
