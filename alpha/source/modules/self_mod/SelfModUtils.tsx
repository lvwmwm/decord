// Module ID: 8939
// Function ID: 8940
// Name: SelfModUtils
// Dependencies: [1387, 2]
// Exports: isCurrentUserTeen

// Module 8939 (SelfModUtils)
import UserStore from "UserStore" /* 1387 */;
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
