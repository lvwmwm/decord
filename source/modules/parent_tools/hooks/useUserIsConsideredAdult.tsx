// Module ID: 11195
// Function ID: 11196
// Name: useUserIsConsideredAdult
// Dependencies: [1903, 589, 2]
// Exports: default

// Module 11195 (useUserIsConsideredAdult)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

export default function useUserIsConsideredAdult() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
