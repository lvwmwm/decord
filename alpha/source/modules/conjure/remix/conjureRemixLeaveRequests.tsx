// Module ID: 11455
// Function ID: 11456
// Name: conjureRemixLeaveRequests
// Dependencies: [19, 2]
// Exports: requestConjureRemixLeave, useConjureRemixLeaveRequests

// Module 11455 (conjureRemixLeaveRequests)
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const set = new Set();
const result = size.fileFinishedImporting("modules/conjure/remix/conjureRemixLeaveRequests.tsx");

export function requestConjureRemixLeave(c0) {
  const items = [...set];
  for (const item10010 of items) {
    let item10010Result = item10010(c0);
    continue;
  }
}
export function useConjureRemixLeaveRequests(projectId, set) {
  react = projectId;
  const current = set;
  let closure_2 = react.useRef(set);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [projectId];
  const effect = react.useEffect(() => {
    let ref;
    function listener(arg0) {
      if (arg0 === listener) {
        ref.current();
      }
    }
    current.add(listener);
    return () => {
      set.delete(listener);
    };
  }, items);
}
