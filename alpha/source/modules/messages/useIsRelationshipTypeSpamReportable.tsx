// Module ID: 13594
// Function ID: 13595
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: [4985, 1071, 504, 2]
// Exports: useIsRelationshipTypeSpamReportable

// Module 13594 (useIsRelationshipTypeSpamReportable)
import Constants from "Constants" /* 1071 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const RelationshipTypes = Constants.RelationshipTypes;
const result = size.fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export function useIsRelationshipTypeSpamReportable(id) {
  _require = id;
  const items = [RelationshipStore];
  const items1 = [id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.getRelationshipType(id), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
}
