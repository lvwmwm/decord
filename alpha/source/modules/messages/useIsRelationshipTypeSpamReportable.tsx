// Module ID: 14152
// Function ID: 14153
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: [4956, 1072, 504, 2]
// Exports: useIsRelationshipTypeSpamReportable

// Module 14152 (useIsRelationshipTypeSpamReportable)
import Constants from "Constants" /* 1072 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
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
