// Module ID: 15727
// Function ID: 15728
// Name: useIsGameFriends
// Dependencies: [32, 8698, 1072, 504, 6887, 2]
// Exports: useIsGameFriends

// Module 15727 (useIsGameFriends)
import Constants from "Constants" /* 1072 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 8698 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const RelationshipTypes = Constants.RelationshipTypes;
const result = size.fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export function useIsGameFriends(id) {
  _require = id;
  let items = [GameRelationshipStore];
  const items1 = [id];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(id, RelationshipTypes.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
