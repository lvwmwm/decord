// Module ID: 7456
// Function ID: 7457
// Name: SelfModUtils
// Dependencies: [1384, 2]
// Exports: isCurrentUserTeen

// Module 7456 (SelfModUtils)
import UserStore from "UserStore" /* 1384 */;
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
