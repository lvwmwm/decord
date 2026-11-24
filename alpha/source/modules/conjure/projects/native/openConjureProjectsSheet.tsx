// Module ID: 14104
// Function ID: 14105
// Name: openConjureProjectsSheet
// Dependencies: [6808, 14105, 11341, 5131, 14108, 2119, 2]
// Exports: default, showConjureProjectsSheet

// Module 14104 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11341 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 14105 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    const obj = useConjureProjectGroups;
    if (0 === obj.getListedConjureProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14108, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14108, dependencyMap.paths), "ConjureProjectsSheet");
}
