// Module ID: 763
// Function ID: 764
// Dependencies: [706, 733]
// Exports: createCheckInEnvelope

// Module 763
import _mod706 from "module_706" /* 706 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 733 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, trace, sdk, arg3, arg4) {
  const obj = { sent_at: new Date().toISOString() };
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp2 = arg3;
  if (arg3) {
    tmp2 = arg4;
  }
  if (tmp2) {
    obj.dsn = _mod706.dsnToString(arg4);
  }
  if (trace) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};
