// Module ID: 14941
// Function ID: 14942
// Name: useIsGameFriends
// Dependencies: [32, 7793, 1072, 504, 6760, 2]
// Exports: useIsGameFriends

// Module 14941 (useIsGameFriends)
import Constants from "Constants" /* 1072 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7793 */;
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
