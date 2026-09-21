// Module ID: 13287
// Function ID: 13288
// Name: useShouldShowMutualInfo
// Dependencies: [1372, 504, 13288, 2]
// Exports: default

// Module 13287 (useShouldShowMutualInfo)
import initialize from "initialize" /* 504 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 13288 */;
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
