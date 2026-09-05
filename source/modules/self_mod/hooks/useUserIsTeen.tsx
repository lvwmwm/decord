// Module ID: 8644
// Function ID: 8645
// Name: useUserIsTeen
// Dependencies: [1371, 504, 2]
// Exports: useUserIsTeen

// Module 8644 (useUserIsTeen)
import initialize from "initialize" /* 504 */;
import closure_2 from "mergeGuildAvatar" /* 1371 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export const useUserIsTeen = function useUserIsTeen() {
  const items = [closure_2];
  return false === initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
