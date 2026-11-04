// Module ID: 17683
// Function ID: 17684
// Name: useConjureGuildUnreadSummary
// Dependencies: [19, 6803, 6805, 6737, 558, 576, 10754, 504, 10752, 2]

// Module 17683 (useConjureGuildUnreadSummary)
import ReadStateConstants from "ReadStateConstants" /* 6737 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10752 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6803 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6805 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let resourceIds;

const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildUnreadSummary(arg0) {
  let stateFromStoresArray;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  const tmp = stateFromStoresArray;
  let obj = stateFromStoresArray(576);
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, ConjureProjectStore];
    const fn = function l() {
      let project;
      resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
      const found = resourceIds.filter((item) => {
        let result = null == project.getProject(item);
        if (result) {
          const obj = stateFromStoresArray(closure_1_1[6]);
          result = obj.isConjureProjectUnread(item);
        }
        return result;
      });
      return found.sort();
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
  const tmpResult = tmp(504);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5, tmp6);
  if (cResult[3] !== stateFromStoresArray) {
    const fn2 = function f() {
      if (stateFromStoresArray.length > 0) {
        const obj = ConjureActionCreators;
        const missingConjureProjects = obj.loadMissingConjureProjects(tmp);
      }
    };
    const items2 = [stateFromStoresArray];
    cResult[3] = stateFromStoresArray;
    cResult[4] = fn2;
    cResult[5] = items2;
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = react.useEffect(tmp10, tmp11);
  const tmpResult2 = tmp(10754);
  return tmpResult2.useConjureUnreadSummary(arg0);
}) : (function useConjureGuildUnreadSummary(arg0) {
  let stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  const items = [ReadStateStore, ConjureProjectStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let project;
    resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
    const found = resourceIds.filter((item) => {
      let result = null == project.getProject(item);
      if (result) {
        const obj = stateFromStoresArray(closure_1_1[6]);
        result = obj.isConjureProjectUnread(item);
      }
      return result;
    });
    return found.sort();
  }, []);
  const items1 = [stateFromStoresArray];
  const effect = react.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      const obj = ConjureActionCreators;
      const missingConjureProjects = obj.loadMissingConjureProjects(tmp);
    }
  }, items1);
  const obj2 = stateFromStoresArray(10754);
  return obj2.useConjureUnreadSummary(arg0);
});
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureGuildUnreadSummary.tsx");

export default tmp2;
