// Module ID: 14813
// Function ID: 14814
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [7040, 589, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 14813 (useIsAllowGameFriendDMsSettingVisible)
import recountRelationshipTypes from "recountRelationshipTypes";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [recountRelationshipTypes];
  return require(589) /* initialize */.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
