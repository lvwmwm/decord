// Module ID: 11609
// Function ID: 90171
// Name: useIsRelationshipTypeSpamReportable
// Dependencies: []
// Exports: useIsRelationshipTypeSpamReportable

// Module 11609 (useIsRelationshipTypeSpamReportable)
let closure_2 = importDefault(dependencyMap[0]);
const RelationshipTypes = arg1(dependencyMap[1]).RelationshipTypes;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/messages/useIsRelationshipTypeSpamReportable.tsx");

export const useIsRelationshipTypeSpamReportable = function useIsRelationshipTypeSpamReportable(id) {
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => relationshipType.getRelationshipType(arg0), items1);
  let tmp2 = stateFromStores === RelationshipTypes.NONE;
  if (!tmp2) {
    tmp2 = stateFromStores === RelationshipTypes.BLOCKED;
  }
  if (!tmp2) {
    tmp2 = stateFromStores === RelationshipTypes.PENDING_INCOMING;
  }
  return tmp2;
};
