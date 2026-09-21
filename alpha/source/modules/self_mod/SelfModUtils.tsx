// Module ID: 7533
// Function ID: 7534
// Name: SelfModUtils
// Dependencies: [1372, 2]
// Exports: isCurrentUserTeen

// Module 7533 (SelfModUtils)
import UserStore from "UserStore" /* 1372 */;

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
