// Module ID: 17607
// Function ID: 17608
// Name: useConjureGuildUnreadSummary
// Dependencies: [19, 6500, 6502, 6434, 504, 6816, 6814, 2]
// Exports: default

// Module 17607 (useConjureGuildUnreadSummary)
import ReadStateConstants from "ReadStateConstants" /* 6434 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6814 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6500 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
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
  const obj2 = stateFromStoresArray(6816);
  return obj2.useConjureUnreadSummary(arg0);
};
