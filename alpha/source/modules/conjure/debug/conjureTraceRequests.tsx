// Module ID: 17081
// Function ID: 17082
// Name: conjureTraceRequests
// Dependencies: [19, 558, 576, 2]
// Exports: hasConjureTraceRequest, requestConjureTrace, takeConjureTraceRequest

// Module 17081 (conjureTraceRequests)
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require, dependencyMap;

let react = react_mod;
const set = new Set();
let c4 = null;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTraceRequests(arg0, cResult) {
  let closure_0;
  let closure_2;
  let current;
  let tmp2;
  let tmp4;
  let tmp5;
  _require = arg0;
  dependencyMap = cResult;
  const obj = require("react");
  cResult = obj.c(5);
  react = react.useRef(cResult);
  if (cResult[0] !== cResult) {
    const fn = function s() {
      closure_2.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp2);
  if (cResult[2] !== arg0) {
    const fn2 = function o() {
      let listener;
      let ref;
      if (null != listener) {
        listener = function listener(arg0) {
          if (arg0 === listener) {
            ref.current();
          }
        };
        set.add(listener);
        return () => {
          set.delete(listener);
        };
      }
    };
    const items = [arg0];
    cResult[2] = arg0;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp5 = items;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[3];
    tmp5 = cResult[4];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
}) : (function useConjureTraceRequests(arg0, cResult) {
  let closure_2;
  let closure_0 = arg0;
  const current = cResult;
  react = react.useRef(cResult);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [arg0];
  const effect = react.useEffect(() => {
    let listener;
    let ref;
    if (null != listener) {
      listener = function listener(arg0) {
        if (arg0 === listener) {
          ref.current();
        }
      };
      set.add(listener);
      return () => {
        set.delete(listener);
      };
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/conjure/debug/conjureTraceRequests.tsx");

export const requestConjureTrace = function requestConjureTrace(projectId, traceId) {
  let c4 = { projectId, traceId };
  const items = [...set];
  for (const item10012 of items) {
    let item10012Result = item10012(projectId);
    continue;
  }
};
export const hasConjureTraceRequest = function hasConjureTraceRequest(arg0) {
  let projectId;
  if (_null != null) {
    projectId = _null.projectId;
  }
  return projectId === arg0;
};
export const takeConjureTraceRequest = function takeConjureTraceRequest(projectId) {
  if (null != _null) {
    if (_null.projectId === projectId) {
      _null = null;
      return _null.traceId;
    }
  }
  return null;
};
export const useConjureTraceRequests = tmp3;
