// Module ID: 12085
// Function ID: 12086
// Name: conjureTraceRequests
// Dependencies: [19, 2]
// Exports: hasConjureTraceRequest, requestConjureTrace, takeConjureTraceRequest, useConjureTraceRequests

// Module 12085 (conjureTraceRequests)
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _null;

let react = react_mod;
const set = new Set();
let c2 = null;
const result = size.fileFinishedImporting("modules/conjure/debug/conjureTraceRequests.tsx");

export function requestConjureTrace(projectId, traceId) {
  let c2 = { projectId, traceId };
  const items = [...set];
  for (const item10012 of items) {
    let item10012Result = item10012(projectId);
    continue;
  }
}
export function hasConjureTraceRequest(arg0) {
  let projectId;
  if (_null != null) {
    projectId = _null.projectId;
  }
  return projectId === arg0;
}
export function takeConjureTraceRequest(projectId) {
  if (null != _null) {
    if (_null.projectId === projectId) {
      _null = null;
      return _null.traceId;
    }
  }
  return null;
}
export function useConjureTraceRequests(projectId, callback1) {
  react = projectId;
  const current = callback1;
  let closure_2 = react.useRef(callback1);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [projectId];
  const effect = react.useEffect(() => {
    let listener;
    let ref;
    if (null != listener) {
      listener = function listener(arg0) {
        if (arg0 === listener) {
          ref.current();
        }
      };
      current.add(listener);
      return () => {
        set.delete(listener);
      };
    }
  }, items);
}
