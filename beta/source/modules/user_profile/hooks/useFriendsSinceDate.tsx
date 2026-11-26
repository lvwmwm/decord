// Module ID: 14226
// Function ID: 14227
// Name: useFriendsSinceDate
// Dependencies: [2188, 4855, 1071, 563, 7069, 2]
// Exports: useFriendsSinceDate

// Module 14226 (useFriendsSinceDate)
import Constants from "Constants" /* 1071 */;
import LocaleStore from "LocaleStore" /* 2188 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const RelationshipTypes = Constants.RelationshipTypes;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export function useFriendsSinceDate(userId) {
  let locale;
  _require = userId;
  let obj = require("useStateFromStores");
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [RelationshipStore];
  const items2 = [userId];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let since = null;
    const obj = RelationshipStore;
    const tmp = userId;
    if (RelationshipStore.getRelationshipType(userId) === RelationshipTypes.FRIEND) {
      since = obj.getSince(tmp);
    }
    return since;
  }, items2);
  const obj3 = require("ConnectionsUtils");
  return obj3.getCreatedAtDate(stateFromStores1, stateFromStores);
}
