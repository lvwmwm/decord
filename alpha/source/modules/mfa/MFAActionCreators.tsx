// Module ID: 15436
// Function ID: 15437
// Name: mfa/MFAActionCreators
// Dependencies: [15437, 15438, 15447, 2]
// Exports: openMFAModal

// Module 15436 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 15437 */;
import MFA from "MFA" /* 15447 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const SELECT_NAMES = MFAConstants.SELECT_NAMES;
const result = size.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods, arg1, arg2) {
  _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(SELECT_NAMES, type.type));
  require("MFAModal").openMFAModal(methods, (arg0) => MFA.trySubmit(arg0, closure_0), arg2);
};
