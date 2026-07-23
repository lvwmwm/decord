// Module ID: 11627
// Function ID: 90268
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: [3767, 653, 566, 2]
// Exports: useIsRelationshipTypeSpamReportable

// Module 11627 (useIsRelationshipTypeSpamReportable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getRelationshipType(closure_0), items1);
  let tmp2 = stateFromStores === RelationshipTypes.NONE;
  if (!tmp2) {
    tmp2 = stateFromStores === RelationshipTypes.BLOCKED;
  }
  if (!tmp2) {
    tmp2 = stateFromStores === RelationshipTypes.PENDING_INCOMING;
  }
  return tmp2;
};
