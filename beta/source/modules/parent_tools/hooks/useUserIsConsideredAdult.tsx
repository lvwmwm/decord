// Module ID: 12132
// Function ID: 12133
// Name: useUserIsConsideredAdult
// Dependencies: [1372, 504, 2]
// Exports: default

// Module 12132 (useUserIsConsideredAdult)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsConsideredAdult.tsx");

export default function useUserIsConsideredAdult() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
};
