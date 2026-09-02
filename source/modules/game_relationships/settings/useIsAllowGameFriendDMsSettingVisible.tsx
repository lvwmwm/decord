// Module ID: 15714
// Function ID: 15715
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [7412, 586, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 15714 (useIsAllowGameFriendDMsSettingVisible)
import initialize from "initialize" /* 586 */;
import closure_2 from "recountRelationshipTypes" /* 7412 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
