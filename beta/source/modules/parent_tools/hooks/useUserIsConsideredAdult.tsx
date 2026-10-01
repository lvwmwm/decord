// Module ID: 11356
// Function ID: 11357
// Name: useUserIsConsideredAdult
// Dependencies: [1372, 504, 2]
// Exports: default

// Module 11356 (useUserIsConsideredAdult)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let currentUser;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

export default function useUserIsConsideredAdult() {
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
