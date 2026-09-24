// Module ID: 9002
// Function ID: 9003
// Name: useUserIsTeen
// Dependencies: [1372, 504, 2]
// Exports: useUserIsTeen

// Module 9002 (useUserIsTeen)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export const useUserIsTeen = function useUserIsTeen() {
  const items = [UserStore];
  return false === initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
