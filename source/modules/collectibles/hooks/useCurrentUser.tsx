// Module ID: 9398
// Function ID: 9399
// Name: useCurrentUser
// Dependencies: [1922, 589, 38, 2]
// Exports: useCurrentUser, useCurrentUserIfAvailable

// Module 9398 (useCurrentUser)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("module_38").fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  importDefault(38)(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
};
