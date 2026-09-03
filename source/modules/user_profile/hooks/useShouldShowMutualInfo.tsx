// Module ID: 9248
// Function ID: 9249
// Name: useShouldShowMutualInfo
// Dependencies: [1921, 586, 9249, 2]
// Exports: default

// Module 9248 (useShouldShowMutualInfo)
import initialize from "initialize" /* 586 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 9249 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  const obj = initialize;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
};
