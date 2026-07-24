// Module ID: 8708
// Function ID: 68809
// Name: useCurrentUser
// Dependencies: [1849, 566, 44, 2]
// Exports: useCurrentUser, useCurrentUserIfAvailable

// Module 8708 (useCurrentUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("invariant").fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getCurrentUser());
  importDefault(44)(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getCurrentUser());
};
