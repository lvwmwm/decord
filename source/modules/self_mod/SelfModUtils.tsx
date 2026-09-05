// Module ID: 7291
// Function ID: 7292
// Name: isCurrentUserTeen
// Dependencies: [1371, 2]
// Exports: isCurrentUserTeen

// Module 7291 (isCurrentUserTeen)
import closure_0 from "mergeGuildAvatar" /* 1371 */;

const result = require("set").fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
