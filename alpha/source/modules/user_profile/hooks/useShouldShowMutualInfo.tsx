// Module ID: 14893
// Function ID: 14894
// Name: useShouldShowMutualInfo
// Dependencies: [1387, 504, 14894, 2]
// Exports: default

// Module 14893 (useShouldShowMutualInfo)
import get_initialized from "get initialized" /* 504 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 14894 */;
import UserStore from "UserStore" /* 1387 */;
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
