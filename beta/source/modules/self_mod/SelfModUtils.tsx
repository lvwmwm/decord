// Module ID: 6710
// Function ID: 6711
// Name: SelfModUtils
// Dependencies: [1378, 2]
// Exports: isCurrentUserTeen

// Module 6710 (SelfModUtils)
import UserStore from "UserStore" /* 1378 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
