// Module ID: 12106
// Function ID: 94875
// Name: useIsGameFriends
// Dependencies: [57, 5891, 653, 566, 4965, 2]
// Exports: useIsGameFriends

// Module 12106 (useIsGameFriends)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  const _require = id;
  let items = [_isNativeReflectConstruct];
  const items1 = [id];
  return callback(_require(566).useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = outer1_3.getGameRelationshipsForUserByType(closure_0, outer1_4.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(4965).isVersionEqual), 1)[0];
};
