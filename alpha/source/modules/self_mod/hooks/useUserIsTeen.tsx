// Module ID: 8492
// Function ID: 8493
// Name: useUserIsTeen
// Dependencies: [1385, 504, 2]
// Exports: useUserIsTeen

// Module 8492 (useUserIsTeen)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let currentUser;

const result = size.fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export function useUserIsTeen() {
  const items = [UserStore];
  const obj = get_initialized;
  return false === obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
}
