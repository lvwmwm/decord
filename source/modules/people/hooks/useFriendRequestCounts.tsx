// Module ID: 15436
// Function ID: 118685
// Name: getIncomingFriendRequestCount
// Dependencies: [57, 6901, 3767, 566, 2]
// Exports: getOutgoingFriendRequestCount, useIncomingFriendRequestCount

// Module 15436 (getIncomingFriendRequestCount)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function getIncomingFriendRequestCount(items) {
  const tmp = callback(items, 2);
  const first = tmp[0];
  const pendingCount = first.getPendingCount();
  return pendingCount + tmp[1].getPendingIncomingCount();
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export { getIncomingFriendRequestCount };
export const useIncomingFriendRequestCount = function useIncomingFriendRequestCount() {
  let items = [closure_4, _isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const items = [outer1_4, outer1_3];
    return outer1_5(items);
  });
};
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount(items1) {
  let tmp = items1;
  if (items1 === undefined) {
    const items = [globalThis.o, ];
    items[1] = globalThis.s;
    tmp = items;
  }
  const tmp3 = callback(tmp, 2);
  const first = tmp3[0];
  const outgoingCount = first.getOutgoingCount();
  return outgoingCount + tmp3[1].getPendingOutgoingCount();
};
