// Module ID: 7394
// Function ID: 7395
// Name: SelfModUtils
// Dependencies: [1371, 2]
// Exports: isCurrentUserTeen

// Module 7394 (SelfModUtils)
import UserStore from "UserStore" /* 1371 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
