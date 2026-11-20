// Module ID: 17258
// Function ID: 17259
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [8240, 504, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 17258 (useIsAllowGameFriendDMsSettingVisible)
import get_initialized from "get initialized" /* 504 */;
import GameRelationshipStore from "GameRelationshipStore" /* 8240 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export function useIsAllowGameFriendDMsSettingVisible() {
  let gameRelationshipCount;
  const items = [GameRelationshipStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
}
