// Module ID: 5217
// Function ID: 45154
// Name: findHandler
// Dependencies: []

// Module 5217 (findHandler)
function findHandler(handlerTag) {
  return map.get(handlerTag);
}
const map = new Map();
const map1 = new Map();
const map2 = new Map();
arg5.handlerIDToTag = {};
arg5.registerHandler = function registerHandler(handlerTag, nextResult, testId) {
  const result = map.set(handlerTag, nextResult);
  const obj = nextResult(arg6[0]);
  if (tmp2) {
    const result1 = map2.set(testId, handlerTag);
  }
};
arg5.registerOldGestureHandler = function registerOldGestureHandler(handlerTag, arg1) {
  const result = map1.set(handlerTag, arg1);
};
arg5.unregisterOldGestureHandler = function unregisterOldGestureHandler(handlerTag) {
  map1.delete(handlerTag);
};
arg5.unregisterHandler = function unregisterHandler(handlerTag, testId) {
  map.delete(handlerTag);
  const obj = testId(arg6[0]);
  if (tmp2) {
    map2.delete(testId);
  }
};
arg5.findHandler = findHandler;
arg5.findOldGestureHandler = function findOldGestureHandler(handlerTag) {
  return map1.get(handlerTag);
};
arg5.findHandlerByTestID = function findHandlerByTestID(arg0) {
  const value = map2.get(arg0);
  let tmp2 = null;
  if (undefined !== value) {
    const tmp4 = findHandler(value);
    tmp2 = null;
    if (null != tmp4) {
      tmp2 = tmp4;
    }
  }
  return tmp2;
};
