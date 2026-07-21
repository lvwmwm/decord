// Module ID: 906
// Function ID: 9952
// Name: _INTERNAL_insertToFlagBuffer
// Dependencies: []
// Exports: _INTERNAL_addFeatureFlagToActiveSpan, _INTERNAL_copyFlagsFromScopeToEvent, _INTERNAL_insertFlagToScope

// Module 906 (_INTERNAL_insertToFlagBuffer)
function _INTERNAL_insertToFlagBuffer(values, flag, result, arg3) {
  const require = flag;
  if ("boolean" === typeof result) {
    if (values.length > arg3) {
      if (require(dependencyMap[2]).DEBUG_BUILD) {
        const debug = require(dependencyMap[3]).debug;
        const _HermesInternal = HermesInternal;
        debug.error("[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=" + arg3);
      }
    } else {
      const findIndexResult = values.findIndex((flag) => flag.flag === arg1);
      if (-1 !== findIndexResult) {
        values.splice(findIndexResult, 1);
      }
      if (values.length === arg3) {
        values.shift();
      }
      const obj = { flag, result };
      values.push(obj);
    }
  }
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_FLAG_BUFFER_SIZE = 100;
export const _INTERNAL_MAX_FLAGS_PER_SPAN = 10;
export const _INTERNAL_addFeatureFlagToActiveSpan = function _INTERNAL_addFeatureFlagToActiveSpan(first, value) {
  let num = 10;
  if (arguments.length > 2) {
    num = 10;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  if ("boolean" === typeof value) {
    const activeSpan = require(dependencyMap[4]).getActiveSpan();
    if (activeSpan) {
      const data = require(dependencyMap[4]).spanToJSON(activeSpan).data;
      const _HermesInternal = HermesInternal;
      if ("" + "flag.evaluation." + first in data) {
        const _HermesInternal3 = HermesInternal;
        const attr = activeSpan.setAttribute("" + "flag.evaluation." + first, value);
      } else {
        const _Object = Object;
        const keys = Object.keys(data);
        if (keys.filter((str) => str.startsWith("flag.evaluation.")).length < num) {
          const _HermesInternal2 = HermesInternal;
          const attr1 = activeSpan.setAttribute("" + "flag.evaluation." + first, value);
        }
      }
      const obj = require(dependencyMap[4]);
    }
    const obj2 = require(dependencyMap[4]);
  }
};
export const _INTERNAL_copyFlagsFromScopeToEvent = function _INTERNAL_copyFlagsFromScopeToEvent(contexts) {
  let obj = require(dependencyMap[1]);
  const currentScope = obj.getCurrentScope();
  const flags = currentScope.getScopeData().contexts.flags;
  const arr = flags ? flags.values : [];
  if (arr.length) {
    if (undefined === contexts.contexts) {
      contexts.contexts = {};
    }
    obj = { values: callback(arr) };
    contexts.contexts.flags = obj;
  }
  return contexts;
};
export const _INTERNAL_insertFlagToScope = function _INTERNAL_insertFlagToScope(first, value) {
  let num = 100;
  if (arguments.length > 2) {
    num = 100;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  let obj = require(dependencyMap[1]);
  const currentScope = obj.getCurrentScope();
  const contexts = currentScope.getScopeData().contexts;
  if (!contexts.flags) {
    obj = { values: [] };
    contexts.flags = obj;
  }
  _INTERNAL_insertToFlagBuffer(contexts.flags.values, first, value, num);
};
export { _INTERNAL_insertToFlagBuffer };
