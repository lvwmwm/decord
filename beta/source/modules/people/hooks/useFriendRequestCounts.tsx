// Module ID: 17227
// Function ID: 17228
// Name: useFriendRequestCounts
// Dependencies: [32, 7899, 4409, 558, 568, 504, 2]
// Exports: getIncomingFriendRequestCount, getOutgoingFriendRequestCount

// Module 17227 (useFriendRequestCounts)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import _slicedToArray from "module_32" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7899 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;

require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RelationshipStore, GameRelationshipStore];
    const fn = function u() {
      const items = [RelationshipStore, GameRelationshipStore];
      [obj, obj2] = items;
      const pendingCount = obj.getPendingCount();
      return pendingCount + obj2.getPendingIncomingCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let items = [RelationshipStore, GameRelationshipStore];
  return initialize.useStateFromStores(items, () => {
    const items = [RelationshipStore, GameRelationshipStore];
    [obj, obj2] = items;
    const pendingCount = obj.getPendingCount();
    return pendingCount + obj2.getPendingIncomingCount();
  });
});
let closure_5 = tmp2;
function getIncomingFriendRequestCount(items) {
  [obj, obj2] = items;
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export { getIncomingFriendRequestCount };
export const useIncomingFriendRequestCount = tmp2;
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount(items1) {
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_5, ];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = tmp;
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};
