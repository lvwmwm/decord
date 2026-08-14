// Module ID: 14983
// Function ID: 14984
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [7187, 589, 2]
// Exports: useIsAllowGameFriendDMsSettingVisible

// Module 14983 (useIsAllowGameFriendDMsSettingVisible)
import recountRelationshipTypes from "recountRelationshipTypes";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = function useIsAllowGameFriendDMsSettingVisible() {
  const items = [recountRelationshipTypes];
  return require(589) /* initialize */.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
};
