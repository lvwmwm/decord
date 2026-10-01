// Module ID: 16575
// Function ID: 16576
// Name: useFriendRequestCounts
// Dependencies: [32, 7071, 4479, 504, 2]
// Exports: getIncomingFriendRequestCount, getOutgoingFriendRequestCount, useIncomingFriendRequestCount

// Module 16575 (useFriendRequestCounts)
import get_initialized from "get initialized" /* 504 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7071 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export const getIncomingFriendRequestCount = function getIncomingFriendRequestCount(items) {
  let obj;
  let obj2;
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
};
export const useIncomingFriendRequestCount = function useIncomingFriendRequestCount() {
  const obj = get_initialized;
  let items = [RelationshipStore, GameRelationshipStore];
  return obj.useStateFromStores(items, () => {
    let obj;
    let obj2;
    const items = [RelationshipStore, GameRelationshipStore];
    [obj, obj2] = items;
    _slicedToArray(items, 2);
    const pendingCount = obj.getPendingCount();
    return pendingCount + obj2.getPendingIncomingCount();
  });
};
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount(items1) {
  let obj;
  let obj2;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [globalThis.o, ];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};
