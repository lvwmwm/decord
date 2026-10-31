// Module ID: 7390
// Function ID: 7391
// Name: useNSFWAllowed
// Dependencies: [1383, 504, 2]
// Exports: useNSFWAllowed

// Module 7390 (useNSFWAllowed)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1383 */;
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
