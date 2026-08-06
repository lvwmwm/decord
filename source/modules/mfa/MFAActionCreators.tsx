// Module ID: 14899
// Function ID: 14900
// Name: openMFAModal
// Dependencies: [14900, 14901, 14910, 2]
// Exports: openMFAModal

// Module 14899 (openMFAModal)
import { SELECT_NAMES } from "get webauthn";

const result = require("finishMFACheck").fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(closure_2, type.type));
  _require(14901).openMFAModal(methods, (arg0) => callback(outer1_1[2]).trySubmit(arg0, callback), arg2);
};
