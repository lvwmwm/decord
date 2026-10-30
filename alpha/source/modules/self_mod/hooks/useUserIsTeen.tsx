// Module ID: 8360
// Function ID: 8361
// Name: useUserIsTeen
// Dependencies: [1384, 504, 2]
// Exports: useUserIsTeen

// Module 8360 (useUserIsTeen)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1384 */;
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
