// Module ID: 14653
// Function ID: 111606
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [5925, 566, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 14653 (useIsAllowGameFriendDMsSettingVisible)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getGameRelationshipCount() > 0);
};
