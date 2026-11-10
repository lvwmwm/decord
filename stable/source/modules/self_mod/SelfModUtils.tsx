// Module ID: 7462
// Function ID: 7463
// Name: SelfModUtils
// Dependencies: [1383, 2]
// Exports: isCurrentUserTeen

// Module 7462 (SelfModUtils)
import UserStore from "UserStore" /* 1383 */;
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
