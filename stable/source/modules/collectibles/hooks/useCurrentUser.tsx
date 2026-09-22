// Module ID: 8295
// Function ID: 8296
// Name: useCurrentUser
// Dependencies: [1371, 504, 38, 2]
// Exports: useCurrentUser, useCurrentUserIfAvailable

// Module 8295 (useCurrentUser)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
};
