// Module ID: 11973
// Function ID: 92559
// Name: useGameRelationshipsForUserByType
// Dependencies: []
// Exports: useGameFriendsForUser, useGameRelationshipsByType, useHasGameRelationshipsForUser, useHasGameRelationshipsForUserByType, useIncomingGameRelationshipsForUser

// Module 11973 (useGameRelationshipsForUserByType)
function useGameRelationshipsForUserByType(id, FRIEND) {
  FRIEND = id;
  const dependencyMap = FRIEND;
  const items = [closure_3];
  const items1 = [FRIEND, id];
  return callback(FRIEND(dependencyMap[3]).useStateFromStores(items, () => {
    const items = [authStore.getGameRelationshipsForUserByType(arg0, arg1), authStore.getGameRelationshipsVersion()];
    return items;
  }, items1, FRIEND(dependencyMap[4]).isVersionEqual), 1)[0];
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const RelationshipTypes = arg1(dependencyMap[2]).RelationshipTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export const useGameRelationshipsByType = function useGameRelationshipsByType(FRIEND) {
  const arg1 = FRIEND;
  const items = [closure_3];
  const items1 = [FRIEND];
  return callback(arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const items = [store.getGameRelationshipsByType(arg0), store.getGameRelationshipsVersion()];
    return items;
  }, items1, arg1(dependencyMap[4]).isVersionEqual), 1)[0];
};
export const useGameFriendsForUser = function useGameFriendsForUser(id) {
  return useGameRelationshipsForUserByType(id, RelationshipTypes.FRIEND);
};
export const useIncomingGameRelationshipsForUser = function useIncomingGameRelationshipsForUser(id) {
  return useGameRelationshipsForUserByType(id, RelationshipTypes.PENDING_INCOMING);
};
export const useHasGameRelationshipsForUser = function useHasGameRelationshipsForUser(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return callback(arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const gameRelationshipsForUser = authStore.getGameRelationshipsForUser(arg0);
    const items = [gameRelationshipsForUser.length > 0, authStore.getGameRelationshipsVersion()];
    return items;
  }, items1, arg1(dependencyMap[4]).isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUserByType = function useHasGameRelationshipsForUserByType(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_3];
  const items1 = [arg1, arg0];
  return callback(arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = authStore.getGameRelationshipsForUserByType(arg0, arg1);
    const items = [gameRelationshipsForUserByType.length > 0, authStore.getGameRelationshipsVersion()];
    return items;
  }, items1, arg1(dependencyMap[4]).isVersionEqual), 1)[0];
};
