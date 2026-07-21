// Module ID: 5016
// Function ID: 42861
// Name: transformIntoHandlerTags
// Dependencies: []
// Exports: filterConfig, findNodeHandle, scheduleFlushOperations

// Module 5016 (transformIntoHandlerTags)
let Platform;
function transformIntoHandlerTags(arg0) {
  const obj = require(dependencyMap[1]);
  const mapped = require(dependencyMap[1]).toArray(arg0).map((current) => {
    let num = callback(closure_2[2]).handlerIDToTag[current];
    if (!num) {
      current = current.current;
      let handlerTag;
      if (null != current) {
        handlerTag = current.handlerTag;
      }
      num = handlerTag;
    }
    if (!num) {
      num = -1;
    }
    return num;
  });
  return mapped.filter((arg0) => arg0 > 0);
}
const _module = require(dependencyMap[0]);
({ Platform, findNodeHandle: closure_3 } = _module);
let closure_4 = false;

export const filterConfig = function filterConfig(config, ALLOWED_PROPS, closure_2) {
  let str = 2;
  if (arguments.length <= 2) {
    let obj = {};
    const _Object = Object;
    const merged = Object.assign({}, obj);
    ALLOWED_PROPS[Symbol.iterator]();
    str = "__isNative";
  }
  obj = arguments[str];
};
export { transformIntoHandlerTags };
export const findNodeHandle = function findNodeHandle(arg0) {
  const tmp = callback(arg0);
  let tmp2 = null;
  if (null != tmp) {
    tmp2 = tmp;
  }
  return tmp2;
};
export const scheduleFlushOperations = function scheduleFlushOperations() {
  if (!closure_4) {
    closure_4 = true;
    require(dependencyMap[3]).ghQueueMicrotask(() => {
      callback(closure_2[4]).flushOperations();
      let closure_4 = false;
    });
    const obj = require(dependencyMap[3]);
  }
};
