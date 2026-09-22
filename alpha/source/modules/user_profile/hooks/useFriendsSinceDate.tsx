// Module ID: 11479
// Function ID: 11480
// Name: useFriendsSinceDate
// Dependencies: [2109, 4406, 1074, 563, 5626, 2]
// Exports: useFriendsSinceDate

// Module 11479 (useFriendsSinceDate)
import LocaleStore from "LocaleStore" /* 2109 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;

const require = globalThis.__r;

const require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  _require = userId;
  const items = [LocaleStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => locale.locale);
  const obj = require("useStateFromStores");
  const items1 = [RelationshipStore];
  const items2 = [userId];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
    let since = null;
    if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
      since = RelationshipStore.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = require("useStateFromStores");
  return require("ConnectionsUtils").getCreatedAtDate(stateFromStores1, stateFromStores);
};
