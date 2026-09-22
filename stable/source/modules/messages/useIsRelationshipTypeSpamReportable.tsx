// Module ID: 12726
// Function ID: 12727
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: [4285, 1074, 504, 2]
// Exports: useIsRelationshipTypeSpamReportable

// Module 12726 (useIsRelationshipTypeSpamReportable)
import RelationshipStore from "RelationshipStore" /* 4285 */;

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
