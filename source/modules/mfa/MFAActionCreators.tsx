// Module ID: 14758
// Function ID: 14759
// Name: openMFAModal
// Dependencies: [14759, 14760, 14769, 2]
// Exports: openMFAModal

// Module 14758 (openMFAModal)
import { SELECT_NAMES } from "get webauthn";

const result = require("finishMFACheck").fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(closure_2, type.type));
  _require(14760).openMFAModal(methods, (arg0) => callback(outer1_1[2]).trySubmit(arg0, callback), arg2);
};
