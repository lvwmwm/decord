// Module ID: 7384
// Function ID: 7385
// Name: useNSFWAllowed
// Dependencies: [1384, 504, 2]
// Exports: useNSFWAllowed

// Module 7384 (useNSFWAllowed)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let currentUser;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export function useNSFWAllowed() {
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (nsfwAllowed == null) {
      nsfwAllowed = null;
    }
    return nsfwAllowed;
  });
}
