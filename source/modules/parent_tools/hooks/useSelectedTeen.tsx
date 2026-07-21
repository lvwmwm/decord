// Module ID: 7120
// Function ID: 57222
// Name: useSelectedTeen
// Dependencies: []
// Exports: useSelectedTeen, useSelectedTeenId

// Module 7120 (useSelectedTeen)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [closure_3];
  const callback = callback(dependencyMap[2]).useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = callback(dependencyMap[2]);
  const items1 = [closure_2];
  return callback(dependencyMap[2]).useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = user.getUser(closure_0);
    }
    return user;
  });
};
export const useSelectedTeenId = function useSelectedTeenId() {
  const items = [closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
};
