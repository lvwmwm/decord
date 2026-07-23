// Module ID: 5669
// Function ID: 48684
// Name: isCurrentUserTeen
// Dependencies: [1849, 2]
// Exports: isCurrentUserTeen

// Module 5669 (isCurrentUserTeen)
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
