// Module ID: 17141
// Function ID: 17142
// Name: mfa/MFAActionCreators
// Dependencies: [17142, 17143, 17152, 2]
// Exports: openMFAModal

// Module 17141 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 17142 */;
import MFA from "MFA" /* 17152 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SELECT_NAMES = MFAConstants.SELECT_NAMES;
const result = size.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export function openMFAModal(methods, arg1, arg2) {
  let closure_0;
  _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(SELECT_NAMES, type.type));
  let obj = require("MFAModal");
  obj.openMFAModal(methods, function finish(arg0) {
    const obj = MFA;
    return obj.trySubmit(arg0, closure_0);
  }, arg2);
}
