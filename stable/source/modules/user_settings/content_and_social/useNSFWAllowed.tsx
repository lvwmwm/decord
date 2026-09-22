// Module ID: 9426
// Function ID: 9427
// Name: useNSFWAllowed
// Dependencies: [1371, 504, 2]
// Exports: useNSFWAllowed

// Module 9426 (useNSFWAllowed)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export const useNSFWAllowed = function useNSFWAllowed() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
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
};
