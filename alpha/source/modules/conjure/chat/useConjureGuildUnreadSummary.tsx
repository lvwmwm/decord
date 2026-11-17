// Module ID: 18977
// Function ID: 18978
// Name: useConjureGuildUnreadSummary
// Dependencies: [19, 7023, 7025, 6957, 504, 7341, 7339, 2]
// Exports: default

// Module 18977 (useConjureGuildUnreadSummary)
import ReadStateConstants from "ReadStateConstants" /* 6957 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7339 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 7023 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
import size from "module_2" /* 2 */;

let resourceIds;

const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureGuildUnreadSummary.tsx");

export default function useConjureGuildUnreadSummary(arg0) {
  let stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  const items = [ReadStateStore, ConjureProjectStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let project;
    resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
    const found = resourceIds.filter((item) => {
      let result = null == project.getProject(item);
      if (result) {
        const obj = stateFromStoresArray(closure_1_1[5]);
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
  const obj2 = stateFromStoresArray(7341);
  return obj2.useConjureUnreadSummary(arg0);
};
