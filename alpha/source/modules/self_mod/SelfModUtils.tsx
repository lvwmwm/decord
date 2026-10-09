// Module ID: 6982
// Function ID: 6983
// Name: SelfModUtils
// Dependencies: [1390, 2]
// Exports: isCurrentUserTeen

// Module 6982 (SelfModUtils)
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
