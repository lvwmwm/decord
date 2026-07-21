// Module ID: 11876
// Function ID: 91942
// Name: useFriendsSinceDate
// Dependencies: []
// Exports: useFriendsSinceDate

// Module 11876 (useFriendsSinceDate)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const RelationshipTypes = arg1(dependencyMap[2]).RelationshipTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  const arg1 = userId;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => locale.locale);
  const obj = arg1(dependencyMap[3]);
  const items1 = [closure_3];
  const items2 = [userId];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => {
    let since = null;
    if (store.getRelationshipType(arg0) === constants.FRIEND) {
      since = store.getSince(arg0);
    }
    return since;
  }, items2);
  const obj2 = arg1(dependencyMap[3]);
  return arg1(dependencyMap[4]).getCreatedAtDate(stateFromStores1, stateFromStores);
};
