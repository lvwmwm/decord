// Module ID: 11981
// Function ID: 92620
// Name: useIsGameFriends
// Dependencies: []
// Exports: useIsGameFriends

// Module 11981 (useIsGameFriends)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const RelationshipTypes = arg1(dependencyMap[2]).RelationshipTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/game_relationships/hooks/useIsGameFriends.tsx");

export const useIsGameFriends = function useIsGameFriends(id) {
  const arg1 = id;
  const items = [closure_3];
  const items1 = [id];
  return callback(arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = authStore.getGameRelationshipsForUserByType(arg0, constants.FRIEND);
    const items = [gameRelationshipsForUserByType.length > 0, authStore.getGameRelationshipsVersion()];
    return items;
  }, items1, arg1(dependencyMap[4]).isVersionEqual), 1)[0];
};
