// Module ID: 15888
// Function ID: 15889
// Name: mfa/MFAActionCreators
// Dependencies: [15889, 15890, 15899, 2]
// Exports: openMFAModal

// Module 15888 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 15889 */;
import MFA from "MFA" /* 15899 */;
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
  obj.openMFAModal(methods, function finish(arg0) {
    const obj = MFA;
    return obj.trySubmit(arg0, closure_0);
  }, arg2);
};
