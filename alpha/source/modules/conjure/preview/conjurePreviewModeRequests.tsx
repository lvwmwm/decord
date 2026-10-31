// Module ID: 10949
// Function ID: 10950
// Name: conjurePreviewModeRequests
// Dependencies: [19, 2]
// Exports: requestConjurePreviewMode, useConjurePreviewModeRequests

// Module 10949 (conjurePreviewModeRequests)
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const set = new Set();
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModeRequests.tsx");

export function requestConjurePreviewMode(arg0, widget) {
  for (const item10007 of set) {
    let item10007Result = item10007(arg0, widget);
    continue;
  }
}
export function useConjurePreviewModeRequests(projectId, set) {
  react = projectId;
  const current = set;
  let closure_2 = react.useRef(set);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [projectId];
  const effect = react.useEffect(() => {
    let listener;
    let ref;
    if (null != listener) {
      listener = function listener(arg0, AUTO_DISMISS) {
        if (arg0 === listener) {
          ref.current(AUTO_DISMISS);
        }
      };
      current.add(listener);
      return () => {
        set.delete(listener);
      };
    }
  }, items);
}
