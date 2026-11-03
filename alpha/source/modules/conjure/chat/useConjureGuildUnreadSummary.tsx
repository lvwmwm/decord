// Module ID: 18421
// Function ID: 18422
// Name: useConjureGuildUnreadSummary
// Dependencies: [19, 6962, 6964, 6896, 504, 11007, 11005, 2]
// Exports: default

// Module 18421 (useConjureGuildUnreadSummary)
import ReadStateConstants from "ReadStateConstants" /* 6896 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11005 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6962 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;
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
  const obj2 = stateFromStoresArray(11007);
  return obj2.useConjureUnreadSummary(arg0);
};
