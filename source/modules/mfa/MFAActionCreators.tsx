// Module ID: 14504
// Function ID: 109261
// Name: openMFAModal
// Dependencies: [0]
// Exports: openMFAModal

// Module 14504 (openMFAModal)
import { SELECT_NAMES } from "result";

const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(closure_2, type.type));
  require(dependencyMap[1]).openMFAModal(methods, (arg0) => arg1(closure_1[2]).trySubmit(arg0, arg1), arg2);
};
