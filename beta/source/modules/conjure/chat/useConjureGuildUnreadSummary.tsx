// Module ID: 17745
// Function ID: 17746
// Name: useConjureGuildUnreadSummary
// Dependencies: [19, 6619, 6621, 6553, 504, 6935, 6933, 2]
// Exports: default

// Module 17745 (useConjureGuildUnreadSummary)
import ReadStateConstants from "ReadStateConstants" /* 6553 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6619 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
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
  const obj2 = stateFromStoresArray(6935);
  return obj2.useConjureUnreadSummary(arg0);
};
