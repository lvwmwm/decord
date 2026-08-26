// Module ID: 6081
// Function ID: 6082
// Name: isCurrentUserTeen
// Dependencies: [1922, 2]
// Exports: isCurrentUserTeen

// Module 6081 (isCurrentUserTeen)
import closure_0 from "mergeGuildAvatar" /* 1922 */;

const result = require("set").fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
