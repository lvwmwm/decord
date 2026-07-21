// Module ID: 9434
// Function ID: 73441
// Name: weakMap
// Dependencies: []
// Exports: getAndIncrementChangesetIdForChat, getChangesetIdForChat

// Module 9434 (weakMap)
const weakMap = new WeakMap();
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/chat/native/ChatChangesetUpdateTracker.tsx");

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
