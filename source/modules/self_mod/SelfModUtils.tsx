// Module ID: 5848
// Function ID: 5849
// Name: isCurrentUserTeen
// Dependencies: [1903, 2]
// Exports: isCurrentUserTeen

// Module 5848 (isCurrentUserTeen)
import mergeGuildAvatar from "mergeGuildAvatar";

const result = require("set").fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
