// Module ID: 15223
// Function ID: 15224
// Name: mfa/MFAActionCreators
// Dependencies: [15224, 15225, 15234, 2]
// Exports: openMFAModal

// Module 15223 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 15224 */;
import MFA from "MFA" /* 15234 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SELECT_NAMES = MFAConstants.SELECT_NAMES;
const result = size.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods, arg1, arg2) {
  let closure_0;
  _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(SELECT_NAMES, type.type));
  let obj = require("MFAModal");
  obj.openMFAModal(methods, (arg0) => {
    const obj = MFA;
    return obj.trySubmit(arg0, closure_0);
  }, arg2);
};
