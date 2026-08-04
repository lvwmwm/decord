// Module ID: 14796
// Function ID: 14797
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [7039, 589, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 14796 (useIsAllowGameFriendDMsSettingVisible)
import recountRelationshipTypes from "recountRelationshipTypes";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [recountRelationshipTypes];
  return require(589) /* initialize */.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
