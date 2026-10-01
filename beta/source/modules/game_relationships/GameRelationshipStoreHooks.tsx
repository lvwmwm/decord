// Module ID: 12637
// Function ID: 12638
// Name: GameRelationshipStoreHooks
// Dependencies: [32, 7071, 1074, 504, 5744, 2]
// Exports: useGameFriendsForUser, useGameRelationshipsByType, useHasGameRelationshipsForUser, useHasGameRelationshipsForUserByType, useIncomingGameRelationshipsForUser

// Module 12637 (GameRelationshipStoreHooks)
import Constants from "Constants" /* 1074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const RelationshipTypes = Constants.RelationshipTypes;
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipStoreHooks.tsx");

export const useGameRelationshipsByType = function useGameRelationshipsByType(FRIEND) {
  _require = FRIEND;
  let items = [GameRelationshipStore];
  const items1 = [FRIEND];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [GameRelationshipStore.getGameRelationshipsByType(FRIEND), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useGameFriendsForUser = function useGameFriendsForUser(id) {
  const FRIEND = RelationshipTypes.FRIEND;
  _require = id;
  const items = [GameRelationshipStore];
  const items1 = [FRIEND, id];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [GameRelationshipStore.getGameRelationshipsForUserByType(id, PENDING_INCOMING), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useIncomingGameRelationshipsForUser = function useIncomingGameRelationshipsForUser(id) {
  const PENDING_INCOMING = RelationshipTypes.PENDING_INCOMING;
  _require = id;
  let items = [GameRelationshipStore];
  const items1 = [PENDING_INCOMING, id];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [GameRelationshipStore.getGameRelationshipsForUserByType(id, PENDING_INCOMING), GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUser = function useHasGameRelationshipsForUser(arg0) {
  let closure_0;
  _require = arg0;
  let items = [GameRelationshipStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
    const items = [gameRelationshipsForUser.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useHasGameRelationshipsForUserByType = function useHasGameRelationshipsForUserByType(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let items = [GameRelationshipStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const gameRelationshipsForUserByType = GameRelationshipStore.getGameRelationshipsForUserByType(closure_0, closure_1);
    const items = [gameRelationshipsForUserByType.length > 0, GameRelationshipStore.getGameRelationshipsVersion()];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
