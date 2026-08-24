// Module ID: 15092
// Function ID: 15093
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [5411, 589, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 15092 (useIsAllowGameFriendDMsSettingVisible)
import initialize from "initialize" /* 589 */;
import closure_2 from "recountRelationshipTypes" /* 5411 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
