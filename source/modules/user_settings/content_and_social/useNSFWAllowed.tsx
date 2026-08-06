// Module ID: 8269
// Function ID: 8270
// Name: useNSFWAllowed
// Dependencies: [1903, 589, 2]
// Exports: useNSFWAllowed

// Module 8269 (useNSFWAllowed)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export const useNSFWAllowed = function useNSFWAllowed() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => {
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
