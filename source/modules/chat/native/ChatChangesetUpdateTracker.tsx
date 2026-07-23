// Module ID: 9442
// Function ID: 73495
// Name: weakMap
// Dependencies: [2]
// Exports: getAndIncrementChangesetIdForChat, getChangesetIdForChat

// Module 9442 (weakMap)
const weakMap = new WeakMap();
let result = require("set").fileFinishedImporting("modules/chat/native/ChatChangesetUpdateTracker.tsx");

export const getAndIncrementChangesetIdForChat = function getAndIncrementChangesetIdForChat(arg0) {
  const value = weakMap.get(arg0);
  let num = 0;
  if (null != value) {
    num = value;
  }
  const sum = num + 1;
  const result = weakMap.set(arg0, sum);
  return sum;
};
export const getChangesetIdForChat = function getChangesetIdForChat(current) {
  let num = 0;
  if (null != current) {
    const value = weakMap.get(current);
    let num2 = 0;
    if (null != value) {
      num2 = value;
    }
    num = num2;
  }
  return num;
};
