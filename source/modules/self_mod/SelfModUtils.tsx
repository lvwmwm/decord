// Module ID: 5838
// Function ID: 51397
// Name: isCurrentUserTeen
// Dependencies: [1850, 2]
// Exports: isCurrentUserTeen

// Module 5838 (isCurrentUserTeen)
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
