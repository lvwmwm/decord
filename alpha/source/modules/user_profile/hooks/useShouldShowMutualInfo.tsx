// Module ID: 13292
// Function ID: 13293
// Name: useShouldShowMutualInfo
// Dependencies: [1372, 504, 13293, 2]
// Exports: default

// Module 13292 (useShouldShowMutualInfo)
import initialize from "initialize" /* 504 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 13293 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
};
