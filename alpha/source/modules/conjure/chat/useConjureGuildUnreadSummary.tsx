// Module ID: 16958
// Function ID: 16959
// Name: useConjureGuildUnreadSummary
// Dependencies: [19, 6035, 10652, 5967, 558, 576, 11208, 504, 11207, 2]

// Module 16958 (useConjureGuildUnreadSummary)
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11207 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10652 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let resourceIds;

const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildUnreadSummary(arg0) {
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = stateFromStores(576);
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, ConjureProjectStore];
    const fn = function l() {
      let project;
      resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
      const found = resourceIds.filter((item) => {
        let result = null == project.getProject(item);
        if (result) {
          const obj = stateFromStores(closure_1_1[6]);
          result = obj.isConjureProjectUnread(item);
        }
        return result;
      });
      const sorted = found.sort();
      return sorted.join(",");
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] !== stateFromStores) {
    const fn2 = function f() {
      const str = stateFromStores;
      if ("" !== stateFromStores) {
        const obj = ConjureActionCreators;
        const missingConjureProjects = obj.loadMissingConjureProjects(str.split(","));
      }
    };
    const items2 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    cResult[5] = items2;
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = react.useEffect(tmp10, tmp11);
  const tmpResult2 = stateFromStores(11208);
  return tmpResult2.useConjureUnreadSummary(arg0);
}) : (function useConjureGuildUnreadSummary(arg0) {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [ReadStateStore, ConjureProjectStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let project;
    resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
    const found = resourceIds.filter((item) => {
      let result = null == project.getProject(item);
      if (result) {
        const obj = stateFromStores(closure_1_1[6]);
        result = obj.isConjureProjectUnread(item);
      }
      return result;
    });
    const sorted = found.sort();
    return sorted.join(",");
  }, []);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    const str = stateFromStores;
    if ("" !== stateFromStores) {
      const obj = ConjureActionCreators;
      const missingConjureProjects = obj.loadMissingConjureProjects(str.split(","));
    }
  }, items1);
  const obj2 = stateFromStores(11208);
  return obj2.useConjureUnreadSummary(arg0);
});
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureGuildUnreadSummary.tsx");

export default tmp2;
