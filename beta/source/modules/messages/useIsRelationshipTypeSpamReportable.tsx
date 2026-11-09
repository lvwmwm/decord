// Module ID: 14410
// Function ID: 14411
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: [5082, 1072, 504, 2]
// Exports: useIsRelationshipTypeSpamReportable

// Module 14410 (useIsRelationshipTypeSpamReportable)
import Constants from "Constants" /* 1072 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;
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
