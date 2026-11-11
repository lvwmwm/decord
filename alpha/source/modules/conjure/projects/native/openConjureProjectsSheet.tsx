// Module ID: 10465
// Function ID: 10466
// Name: openConjureProjectsSheet
// Dependencies: [6954, 10466, 10469, 5489, 10470, 2118, 2]
// Exports: default, showConjureProjectsSheet

// Module 10465 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 10466 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10469 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
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
  obj2.openLazy(asyncRequire(10470, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10470, dependencyMap.paths), "ConjureProjectsSheet");
}
