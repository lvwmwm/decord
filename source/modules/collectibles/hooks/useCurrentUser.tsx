// Module ID: 8659
// Function ID: 68537
// Name: useCurrentUser
// Dependencies: []
// Exports: useCurrentUser, useCurrentUserIfAvailable

// Module 8659 (useCurrentUser)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/hooks/useCurrentUser.tsx");

export const useCurrentUser = function useCurrentUser() {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[1]).useStateFromStores(items, () => currentUser.getCurrentUser());
  importDefault(dependencyMap[2])(null != stateFromStores, "user has to be signed in before accessing shop");
  return stateFromStores;
};
export const useCurrentUserIfAvailable = function useCurrentUserIfAvailable() {
  const items = [closure_3];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => currentUser.getCurrentUser());
};
