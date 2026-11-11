// Module ID: 8788
// Function ID: 8789
// Name: SelfModUtils
// Dependencies: [1385, 2]
// Exports: isCurrentUserTeen

// Module 8788 (SelfModUtils)
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
