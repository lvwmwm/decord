// Module ID: 14522
// Function ID: 109358
// Name: openMFAModal
// Dependencies: []
// Exports: openMFAModal

// Module 14522 (openMFAModal)
const SELECT_NAMES = require(dependencyMap[0]).SELECT_NAMES;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(closure_2, type.type));
  require(dependencyMap[1]).openMFAModal(methods, (arg0) => arg1(closure_1[2]).trySubmit(arg0, arg1), arg2);
};
