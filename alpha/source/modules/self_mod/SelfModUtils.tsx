// Module ID: 8896
// Function ID: 8897
// Name: SelfModUtils
// Dependencies: [1386, 2]
// Exports: isCurrentUserTeen

// Module 8896 (SelfModUtils)
import UserStore from "UserStore" /* 1386 */;
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
