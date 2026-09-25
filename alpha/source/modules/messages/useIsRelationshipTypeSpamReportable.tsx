// Module ID: 12072
// Function ID: 12073
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: [4476, 1074, 504, 2]
// Exports: useIsRelationshipTypeSpamReportable

// Module 12072 (useIsRelationshipTypeSpamReportable)
import RelationshipStore from "RelationshipStore" /* 4476 */;

const require = globalThis.__r;

const require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  _require = id;
  const items = [RelationshipStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => RelationshipStore.getRelationshipType(closure_0), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
};
