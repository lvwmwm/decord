// Module ID: 15810
// Function ID: 15811
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [7591, 586, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 15810 (useIsAllowGameFriendDMsSettingVisible)
import initialize from "initialize" /* 586 */;
import closure_2 from "recountRelationshipTypes" /* 7591 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
