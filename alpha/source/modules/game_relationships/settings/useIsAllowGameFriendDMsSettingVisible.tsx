// Module ID: 17422
// Function ID: 17423
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [8180, 504, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 17422 (useIsAllowGameFriendDMsSettingVisible)
import get_initialized from "get initialized" /* 504 */;
import GameRelationshipStore from "GameRelationshipStore" /* 8180 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export function useIsAllowGameFriendDMsSettingVisible() {
  let gameRelationshipCount;
  const items = [GameRelationshipStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
}
