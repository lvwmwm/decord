// Module ID: 5848
// Function ID: 51254
// Name: isCurrentUserTeen
// Dependencies: [1850, 2]
// Exports: isCurrentUserTeen

// Module 5848 (isCurrentUserTeen)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (null != currentUser) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
