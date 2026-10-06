// Module ID: 15211
// Function ID: 15212
// Name: mfa/MFAActionCreators
// Dependencies: [15212, 15213, 15222, 2]
// Exports: openMFAModal

// Module 15211 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 15212 */;
import MFA from "MFA" /* 15222 */;
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
