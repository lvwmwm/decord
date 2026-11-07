// Module ID: 7526
// Function ID: 7527
// Name: SelfModUtils
// Dependencies: [1385, 2]
// Exports: isCurrentUserTeen

// Module 7526 (SelfModUtils)
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export function isCurrentUserTeen() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
}
