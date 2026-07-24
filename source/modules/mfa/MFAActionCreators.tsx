// Module ID: 14683
// Function ID: 111839
// Name: openMFAModal
// Dependencies: [14684, 14685, 14694, 2]
// Exports: openMFAModal

// Module 14683 (openMFAModal)
import { SELECT_NAMES } from "get webauthn";

const result = require("finishMFACheck").fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(outer1_2, type.type));
  _require(14685).openMFAModal(methods, (arg0) => callback(outer1_1[2]).trySubmit(arg0, callback), arg2);
};
