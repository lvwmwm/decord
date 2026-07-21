// Module ID: 15308
// Function ID: 116434
// Name: getIncomingFriendRequestCount
// Dependencies: []
// Exports: getOutgoingFriendRequestCount, useIncomingFriendRequestCount

// Module 15308 (getIncomingFriendRequestCount)
function getIncomingFriendRequestCount(items) {
  const tmp = callback(items, 2);
  const first = tmp[0];
  const pendingCount = first.getPendingCount();
  return pendingCount + tmp[1].getPendingIncomingCount();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/people/hooks/useFriendRequestCounts.tsx");

export { getIncomingFriendRequestCount };
export const useIncomingFriendRequestCount = function useIncomingFriendRequestCount() {
  const items = [closure_4, closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const items = [closure_4, closure_3];
    return callback(items);
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
