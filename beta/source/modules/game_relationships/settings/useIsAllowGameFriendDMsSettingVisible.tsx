// Module ID: 15505
// Function ID: 15506
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [7071, 504, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 15505 (useIsAllowGameFriendDMsSettingVisible)
import get_initialized from "get initialized" /* 504 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7071 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  let gameRelationshipCount;
  const items = [GameRelationshipStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
