// Module ID: 11902
// Function ID: 92133
// Name: useShouldShowMutualInfo
// Dependencies: []
// Exports: default

// Module 11902 (useShouldShowMutualInfo)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  id = undefined;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[1]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[1]);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp3 = importDefault(dependencyMap[2])(id);
  return id !== id.id && !importDefault(dependencyMap[2])(id);
};
