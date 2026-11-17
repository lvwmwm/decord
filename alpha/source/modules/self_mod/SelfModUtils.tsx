// Module ID: 8865
// Function ID: 8866
// Name: SelfModUtils
// Dependencies: [1388, 2]
// Exports: isCurrentUserTeen

// Module 8865 (SelfModUtils)
import UserStore from "UserStore" /* 1388 */;
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
