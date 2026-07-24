// Module ID: 5240
// Function ID: 45255
// Name: transformIntoHandlerTags
// Dependencies: [27, 5221, 5220, 5241, 5226]
// Exports: filterConfig, findNodeHandle, scheduleFlushOperations

// Module 5240 (transformIntoHandlerTags)
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let closure_3;
function transformIntoHandlerTags(arg0) {
  const obj = require(5221) /* hasProperty */;
  const mapped = require(5221) /* hasProperty */.toArray(arg0).map((current) => {
    let num = outer1_0(outer1_2[2]).handlerIDToTag[current];
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
({ Platform, findNodeHandle: closure_3 } = get_ActivityIndicator);
let c4 = false;

export const filterConfig = function filterConfig(config, ALLOWED_PROPS, outer1_2) {
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
  if (!c4) {
    c4 = true;
    require(5241).ghQueueMicrotask(() => {
      outer1_1(outer1_2[4]).flushOperations();
      let c4 = false;
    });
    const obj = require(5241);
  }
};
