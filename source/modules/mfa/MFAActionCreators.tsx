// Module ID: 14636
// Function ID: 111518
// Name: openMFAModal
// Dependencies: [14637, 14638, 14647, 2]
// Exports: openMFAModal

// Module 14636 (openMFAModal)
import { SELECT_NAMES } from "get webauthn";

const result = require("finishMFACheck").fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(outer1_2, type.type));
  _require(14638).openMFAModal(methods, (arg0) => callback(outer1_1[2]).trySubmit(arg0, callback), arg2);
};
