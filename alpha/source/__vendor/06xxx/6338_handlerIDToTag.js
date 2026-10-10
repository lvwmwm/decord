// Module ID: 6338
// Function ID: 6339
// Name: handlerIDToTag
// Dependencies: [6339]
// Exports: findGesture, findHandler, findHandlerByTestID, findOldGestureHandler, registerGesture, registerHandler, registerOldGestureHandler, unregisterGesture, unregisterHandler, unregisterOldGestureHandler

// Module 6338 (handlerIDToTag)
import tagMessage from "tagMessage" /* 6339 */;

const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();

export const handlerIDToTag = {};
export const registerGesture = function registerGesture(arg0, config) {
  const obj = tagMessage;
  const tmp = obj.isTestEnv() && config.config.testID;
  if (tmp) {
    const result = map.set(arg0, config);
    const result1 = map3.set(config.config.testID, arg0);
  }
};
export const unregisterGesture = function unregisterGesture(arg0) {
  const value = map.get(arg0);
  let testID = value;
  const obj = map;
  if (testID) {
    const obj2 = tagMessage;
    testID = obj2.isTestEnv();
  }
  if (testID) {
    testID = value.config.testID;
  }
  if (testID) {
    map3.delete(value.config.testID);
    obj.delete(arg0);
  }
};
export const registerHandler = function registerHandler(handlerTag, item10022, testId) {
  const result = map1.set(handlerTag, item10022);
  const obj = tagMessage;
  const tmp2 = obj.isTestEnv() && testId;
  if (tmp2) {
    const result1 = map3.set(testId, handlerTag);
  }
};
export const registerOldGestureHandler = function registerOldGestureHandler(handlerTag, arg1) {
  const result = map2.set(handlerTag, arg1);
};
export const unregisterOldGestureHandler = function unregisterOldGestureHandler(handlerTag) {
  map2.delete(handlerTag);
};
export const unregisterHandler = function unregisterHandler(handlerTag, testId) {
  map1.delete(handlerTag);
  const obj = tagMessage;
  const tmp2 = obj.isTestEnv() && testId;
  if (tmp2) {
    map3.delete(testId);
  }
};
export const findHandler = function findHandler(handlerTag) {
  return map1.get(handlerTag);
};
export const findGesture = function findGesture(arg0) {
  return map.get(arg0);
};
export const findOldGestureHandler = function findOldGestureHandler(handlerTag) {
  return map2.get(handlerTag);
};
export const findHandlerByTestID = function findHandlerByTestID(arg0) {
  const value = map3.get(arg0);
  let tmp2 = null;
  if (undefined !== value) {
    let value2 = map1.get(value);
    if (value2 == null) {
      value2 = map.get(value);
    }
    if (value2 == null) {
      value2 = null;
    }
    tmp2 = value2;
  }
  return tmp2;
};
