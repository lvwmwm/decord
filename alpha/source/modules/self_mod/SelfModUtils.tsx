// Module ID: 7209
// Function ID: 7210
// Name: SelfModUtils
// Dependencies: [1390, 2]
// Exports: isCurrentUserTeen

// Module 7209 (SelfModUtils)
import UserStore from "UserStore" /* 1390 */;
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
