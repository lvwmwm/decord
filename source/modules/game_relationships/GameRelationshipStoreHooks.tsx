// Module ID: 11986
// Function ID: 92626
// Name: useGameRelationshipsForUserByType
// Dependencies: [57, 6901, 653, 566, 4964, 2]
// Exports: useGameFriendsForUser, useGameRelationshipsByType, useHasGameRelationshipsForUser, useHasGameRelationshipsForUserByType, useIncomingGameRelationshipsForUser

// Module 11986 (useGameRelationshipsForUserByType)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";

const require = arg1;
function useGameRelationshipsForUserByType(id, FRIEND) {
  const _require = id;
  const dependencyMap = FRIEND;
  let items = [_isNativeReflectConstruct];
  const items1 = [FRIEND, id];
  return callback(_require(566).useStateFromStores(items, () => {
    const items = [outer1_3.getGameRelationshipsForUserByType(closure_0, closure_1), outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(4964).isVersionEqual), 1)[0];
}
const result = require("ME").fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export const useGameRelationshipsByType = function useGameRelationshipsByType(FRIEND) {
  const _require = FRIEND;
  let items = [_isNativeReflectConstruct];
  const items1 = [FRIEND];
  return callback(_require(566).useStateFromStores(items, () => {
    const items = [outer1_3.getGameRelationshipsByType(closure_0), outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(4964).isVersionEqual), 1)[0];
};
export const useGameFriendsForUser = function useGameFriendsForUser(id) {
  return useGameRelationshipsForUserByType(id, RelationshipTypes.FRIEND);
};
export const useIncomingGameRelationshipsForUser = function useIncomingGameRelationshipsForUser(id) {
  return useGameRelationshipsForUserByType(id, RelationshipTypes.PENDING_INCOMING);
};
export const useHasGameRelationshipsForUser = function useHasGameRelationshipsForUser(arg0) {
  const _require = arg0;
  let items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  return callback(_require(566).useStateFromStores(items, () => {
    const gameRelationshipsForUser = outer1_3.getGameRelationshipsForUser(closure_0);
    const items = [gameRelationshipsForUser.length > 0, outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(4964).isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUserByType = function useHasGameRelationshipsForUserByType(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [_isNativeReflectConstruct];
  const items1 = [arg1, arg0];
  return callback(_require(566).useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = outer1_3.getGameRelationshipsForUserByType(closure_0, closure_1);
    const items = [gameRelationshipsForUserByType.length > 0, outer1_3.getGameRelationshipsVersion()];
    return items;
  }, items1, _require(4964).isVersionEqual), 1)[0];
};
