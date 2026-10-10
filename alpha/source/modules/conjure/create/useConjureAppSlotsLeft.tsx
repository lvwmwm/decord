// Module ID: 17040
// Function ID: 17041
// Name: useConjureAppSlotsLeft
// Dependencies: [19, 10651, 558, 576, 11411, 504, 2]

// Module 17040 (useConjureAppSlotsLeft)
import react2 from "react" /* 576 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11411 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let maxProjects;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppSlotsLeft() {
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = ConjureActionCreators;
      const projectLimit = obj.fetchProjectLimit();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConjureProjectStore];
    const fn2 = function u() {
      maxProjects = maxProjects.getMaxProjects();
      let bound = null;
      if (null != maxProjects) {
        bound = null;
        if (maxProjects.hasFetchedOwnedProjects()) {
          const _Math = Math;
          bound = Math.max(0, maxProjects - obj.getOwnedProjects().length);
        }
      }
      return bound;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp8 = fn2;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp7, tmp8);
}) : (function useConjureAppSlotsLeft() {
  const effect = react.useEffect(() => {
    const obj = ConjureActionCreators;
    const projectLimit = obj.fetchProjectLimit();
  }, []);
  let obj = get_initialized;
  const items = [ConjureProjectStore];
  return obj.useStateFromStores(items, () => {
    maxProjects = maxProjects.getMaxProjects();
    let bound = null;
    if (null != maxProjects) {
      bound = null;
      if (maxProjects.hasFetchedOwnedProjects()) {
        const _Math = Math;
        bound = Math.max(0, maxProjects - obj.getOwnedProjects().length);
      }
    }
    return bound;
  });
});
const result = size.fileFinishedImporting("modules/conjure/create/useConjureAppSlotsLeft.tsx");

export default tmp2;
