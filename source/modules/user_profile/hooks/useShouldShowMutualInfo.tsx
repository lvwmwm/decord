// Module ID: 9191
// Function ID: 9192
// Name: useShouldShowMutualInfo
// Dependencies: [1922, 589, 9192, 2]
// Exports: default

// Module 9191 (useShouldShowMutualInfo)
import initialize from "initialize" /* 589 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 9192 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

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
