// Module ID: 6905
// Function ID: 6906
// Name: SelfModUtils
// Dependencies: [1372, 2]
// Exports: isCurrentUserTeen

// Module 6905 (SelfModUtils)
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
