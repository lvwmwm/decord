// Module ID: 7535
// Function ID: 7536
// Name: SelfModUtils
// Dependencies: [1376, 2]
// Exports: isCurrentUserTeen

// Module 7535 (SelfModUtils)
import UserStore from "UserStore" /* 1376 */;

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
