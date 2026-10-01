// Module ID: 17321
// Function ID: 17322
// Name: useIsInRestrictedHours
// Dependencies: [1372, 7145, 504, 2]
// Exports: default

// Module 17321 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7145 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
};
