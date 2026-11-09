// Module ID: 17991
// Function ID: 17992
// Name: mfa/MFAActionCreators
// Dependencies: [17992, 17993, 18002, 2]
// Exports: openMFAModal

// Module 17991 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 17992 */;
import MFA from "MFA" /* 18002 */;
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
