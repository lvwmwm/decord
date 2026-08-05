// Module ID: 11836
// Function ID: 11837
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: [3892, 676, 589, 2]
// Exports: useIsRelationshipTypeSpamReportable

// Module 11836 (useIsRelationshipTypeSpamReportable)
import upsertRelationship from "upsertRelationship";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  const _require = id;
  const items = [upsertRelationship];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_2.getRelationshipType(closure_0), items1);
  return stateFromStores === RelationshipTypes.NONE || stateFromStores === RelationshipTypes.BLOCKED || stateFromStores === RelationshipTypes.PENDING_INCOMING;
};
