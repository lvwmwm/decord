// Module ID: 18823
// Function ID: 18824
// Name: useFriendRequestCounts
// Dependencies: [32, 7800, 4956, 504, 2]
// Exports: getIncomingFriendRequestCount, getOutgoingFriendRequestCount, useIncomingFriendRequestCount

// Module 18823 (useFriendRequestCounts)
import get_initialized from "get initialized" /* 504 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7800 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export function getIncomingFriendRequestCount(items) {
  let obj;
  let obj2;
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
}
export function useIncomingFriendRequestCount() {
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
}
export function getOutgoingFriendRequestCount(items1) {
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
}
