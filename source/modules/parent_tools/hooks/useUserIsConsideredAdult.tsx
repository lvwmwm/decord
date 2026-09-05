// Module ID: 11877
// Function ID: 11878
// Name: useUserIsConsideredAdult
// Dependencies: [1371, 504, 2]
// Exports: default

// Module 11877 (useUserIsConsideredAdult)
import initialize from "initialize" /* 504 */;
import closure_2 from "mergeGuildAvatar" /* 1371 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

export default function useUserIsConsideredAdult() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
