// Module ID: 15291
// Function ID: 15292
// Name: openMFAModal
// Dependencies: [15292, 15293, 15302, 2]
// Exports: openMFAModal

// Module 15291 (openMFAModal)
import set from "set" /* 2 */;
import get_webauthn from "get webauthn" /* 15292 */;

const SELECT_NAMES = get_webauthn.SELECT_NAMES;
const result = set.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(closure_2, type.type));
  _require(15293).openMFAModal(methods, (arg0) => callback(closure_1_1[2]).trySubmit(arg0, callback), arg2);
};
