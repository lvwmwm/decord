// Module ID: 14322
// Function ID: 14323
// Name: useShouldShowMutualInfo
// Dependencies: [1386, 504, 14323, 2]
// Exports: default

// Module 14322 (useShouldShowMutualInfo)
import get_initialized from "get initialized" /* 504 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 14323 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  return id !== id.id && !tmp2;
};
