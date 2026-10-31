// Module ID: 18264
// Function ID: 18265
// Name: useConjureGuildUnreadSummary
// Dependencies: [19, 6842, 6844, 6776, 504, 10877, 10875, 2]
// Exports: default

// Module 18264 (useConjureGuildUnreadSummary)
import ReadStateConstants from "ReadStateConstants" /* 6776 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
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
  const obj2 = stateFromStoresArray(10877);
  return obj2.useConjureUnreadSummary(arg0);
};
