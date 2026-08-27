// Module ID: 8696
// Function ID: 8697
// Name: useUserIsTeen
// Dependencies: [1922, 589, 2]
// Exports: useUserIsTeen

// Module 8696 (useUserIsTeen)
import initialize from "initialize" /* 589 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;

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
