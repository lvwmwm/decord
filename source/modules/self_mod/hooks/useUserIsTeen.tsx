// Module ID: 8077
// Function ID: 8078
// Name: useUserIsTeen
// Dependencies: [1922, 589, 2]
// Exports: useUserIsTeen

// Module 8077 (useUserIsTeen)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/hooks/useUserIsTeen.tsx");

export const useUserIsTeen = function useUserIsTeen() {
  const items = [mergeGuildAvatar];
  return false === require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
