// Module ID: 15588
// Function ID: 15589
// Name: openMFAModal
// Dependencies: [15589, 15590, 15599, 2]
// Exports: openMFAModal

// Module 15588 (openMFAModal)
import set from "set" /* 2 */;
import get_webauthn from "get webauthn" /* 15589 */;

const SELECT_NAMES = get_webauthn.SELECT_NAMES;
const result = set.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(closure_2, type.type));
  _require(15590).openMFAModal(methods, (arg0) => callback(closure_1_1[2]).trySubmit(arg0, callback), arg2);
};
