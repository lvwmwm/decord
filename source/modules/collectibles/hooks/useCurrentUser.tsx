// Module ID: 8178
// Function ID: 8179
// Name: useCurrentUser
// Dependencies: [1371, 504, 38, 2]
// Exports: useCurrentUser, useCurrentUserIfAvailable

// Module 8178 (useCurrentUser)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
};
