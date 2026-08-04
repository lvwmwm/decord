// Module ID: 5817
// Function ID: 5818
// Name: isCurrentUserTeen
// Dependencies: [1874, 2]
// Exports: isCurrentUserTeen

// Module 5817 (isCurrentUserTeen)
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
