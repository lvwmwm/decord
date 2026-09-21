// Module ID: 16213
// Function ID: 16214
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [7894, 504, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 16213 (useIsAllowGameFriendDMsSettingVisible)
import initialize from "initialize" /* 504 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7894 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [GameRelationshipStore];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
