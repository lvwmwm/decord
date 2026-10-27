// Module ID: 17072
// Function ID: 17073
// Name: mfa/MFAActionCreators
// Dependencies: [17073, 17074, 17083, 2]
// Exports: openMFAModal

// Module 17072 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 17073 */;
import MFA from "MFA" /* 17083 */;
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
