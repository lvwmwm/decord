// Module ID: 14433
// Function ID: 108825
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: []
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 14433 (useIsAllowGameFriendDMsSettingVisible)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
