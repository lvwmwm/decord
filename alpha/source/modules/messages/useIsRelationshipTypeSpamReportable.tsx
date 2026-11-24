// Module ID: 13411
// Function ID: 13412
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: [4859, 1071, 504, 2]
// Exports: useIsRelationshipTypeSpamReportable

// Module 13411 (useIsRelationshipTypeSpamReportable)
import Constants from "Constants" /* 1071 */;
import RelationshipStore from "RelationshipStore" /* 4859 */;
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
