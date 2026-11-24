// Module ID: 8920
// Function ID: 8921
// Name: useCurrentUser
// Dependencies: [1386, 504, 38, 2]
// Exports: useCurrentUser, useCurrentUserIfAvailable

// Module 8920 (useCurrentUser)
import _modDef38 from "module_38" /* 38 */;
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export function useCurrentUser() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  _modDef38(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
}
export function useCurrentUserIfAvailable() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => currentUser.getCurrentUser());
}
