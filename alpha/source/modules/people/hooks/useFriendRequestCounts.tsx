// Module ID: 17223
// Function ID: 17224
// Name: useFriendRequestCounts
// Dependencies: [32, 7894, 4405, 504, 2]
// Exports: getIncomingFriendRequestCount, getOutgoingFriendRequestCount, useIncomingFriendRequestCount

// Module 17223 (useFriendRequestCounts)
import initialize from "initialize" /* 504 */;
import _slicedToArray from "module_32" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7894 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export const getIncomingFriendRequestCount = function getIncomingFriendRequestCount(items) {
  [obj, obj2] = items;
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
};
export const useIncomingFriendRequestCount = function useIncomingFriendRequestCount() {
  let items = [RelationshipStore, GameRelationshipStore];
  return initialize.useStateFromStores(items, () => {
    const items = [RelationshipStore, GameRelationshipStore];
    [obj, obj2] = items;
    const pendingCount = obj.getPendingCount();
    return pendingCount + obj2.getPendingIncomingCount();
  });
};
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount(items1) {
  let tmp = items1;
  if (items1 === undefined) {
    const items = [globalThis.o, ];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = tmp;
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};
