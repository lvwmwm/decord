// Module ID: 5338
// Function ID: 5339
// Name: handlerIDToTag
// Dependencies: [5339]
// Exports: findGesture, findHandler, findHandlerByTestID, findOldGestureHandler, registerGesture, registerHandler, registerOldGestureHandler, unregisterGesture, unregisterHandler, unregisterOldGestureHandler

// Module 5338 (handlerIDToTag)
import tagMessage from "tagMessage" /* 5339 */;

const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();

export const handlerIDToTag = {};
export function registerGesture(arg0, config) {
  const obj = tagMessage;
  const tmp = obj.isTestEnv() && config.config.testID;
  if (tmp) {
    const result = map.set(arg0, config);
    const result1 = map3.set(config.config.testID, arg0);
  }
}
export function unregisterGesture(arg0) {
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
}
export function registerHandler(handlerTag, item10022, testId) {
  const result = map1.set(handlerTag, item10022);
  const obj = tagMessage;
  const tmp2 = obj.isTestEnv() && testId;
  if (tmp2) {
    const result1 = map3.set(testId, handlerTag);
  }
}
export function registerOldGestureHandler(handlerTag, arg1) {
  const result = map2.set(handlerTag, arg1);
}
export function unregisterOldGestureHandler(handlerTag) {
  map2.delete(handlerTag);
}
export function unregisterHandler(handlerTag, testId) {
  map1.delete(handlerTag);
  const obj = tagMessage;
  const tmp2 = obj.isTestEnv() && testId;
  if (tmp2) {
    map3.delete(testId);
  }
}
export function findHandler(handlerTag) {
  return map1.get(handlerTag);
}
export function findGesture(arg0) {
  return map.get(arg0);
}
export function findOldGestureHandler(handlerTag) {
  return map2.get(handlerTag);
}
export function findHandlerByTestID(arg0) {
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
}
