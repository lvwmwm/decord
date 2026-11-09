// Module ID: 13220
// Function ID: 13221
// Name: openConjureProjectsSheet
// Dependencies: [6899, 13221, 11104, 5374, 13224, 2118, 2]
// Exports: default, showConjureProjectsSheet

// Module 13220 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11104 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13221 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;
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
  obj2.openLazy(asyncRequire(13224, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13224, dependencyMap.paths), "ConjureProjectsSheet");
}
