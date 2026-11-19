// Module ID: 14354
// Function ID: 14355
// Name: useShouldShowMutualInfo
// Dependencies: [1388, 504, 14355, 2]
// Exports: default

// Module 14354 (useShouldShowMutualInfo)
import get_initialized from "get initialized" /* 504 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 14355 */;
import UserStore from "UserStore" /* 1388 */;
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
