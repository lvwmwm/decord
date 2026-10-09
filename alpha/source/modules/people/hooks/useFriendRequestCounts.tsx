// Module ID: 17383
// Function ID: 17384
// Name: useFriendRequestCounts
// Dependencies: [32, 7340, 4719, 558, 576, 504, 2]
// Exports: getIncomingFriendRequestCount, getOutgoingFriendRequestCount

// Module 17383 (useFriendRequestCounts)
import react from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7340 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIncomingFriendRequestCount() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RelationshipStore, GameRelationshipStore];
    const fn = function o() {
      let obj;
      let obj2;
      const items = [RelationshipStore, GameRelationshipStore];
      [obj, obj2] = items;
      _slicedToArray(items, 2);
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIncomingFriendRequestCount() {
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
});
let closure_5 = tmp2;
function getIncomingFriendRequestCount(items) {
  let obj;
  let obj2;
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  const pendingCount = obj.getPendingCount();
  return pendingCount + obj2.getPendingIncomingCount();
}
const result = size.fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export { getIncomingFriendRequestCount };
export const useIncomingFriendRequestCount = tmp2;
export const getOutgoingFriendRequestCount = function getOutgoingFriendRequestCount(items1) {
  let obj;
  let obj2;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_5, ];
    items[1] = globalThis.s;
    tmp = items;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const outgoingCount = obj.getOutgoingCount();
  return outgoingCount + obj2.getPendingOutgoingCount();
};
