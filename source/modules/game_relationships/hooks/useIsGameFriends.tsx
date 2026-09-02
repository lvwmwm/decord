// Module ID: 12720
// Function ID: 12721
// Name: useIsGameFriends
// Dependencies: [32, 7412, 673, 586, 5383, 2]
// Exports: useIsGameFriends

// Module 12720 (useIsGameFriends)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "recountRelationshipTypes" /* 7412 */;
import { RelationshipTypes } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  const _require = id;
  let items = [closure_3];
  const items1 = [id];
  return callback(_require(586).useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = closure_1_3.getGameRelationshipsForUserByType(closure_0, closure_1_4.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, closure_1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(5383).isVersionEqual), 1)[0];
};
