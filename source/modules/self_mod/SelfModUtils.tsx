// Module ID: 7230
// Function ID: 7231
// Name: isCurrentUserTeen
// Dependencies: [1921, 2]
// Exports: isCurrentUserTeen

// Module 7230 (isCurrentUserTeen)
import closure_0 from "mergeGuildAvatar" /* 1921 */;

const result = require("set").fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
