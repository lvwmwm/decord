// Module ID: 17595
// Function ID: 17596
// Name: mfa/MFAActionCreators
// Dependencies: [17596, 17597, 17606, 2]
// Exports: openMFAModal

// Module 17595 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 17596 */;
import MFA from "MFA" /* 17606 */;
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
