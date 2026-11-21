// Module ID: 13781
// Function ID: 13782
// Name: openConjureProjectsSheet
// Dependencies: [6621, 13782, 12290, 5127, 13785, 2119, 2]
// Exports: default, showConjureProjectsSheet

// Module 13781 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12290 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13782 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
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
  obj2.openLazy(asyncRequire(13785, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13785, dependencyMap.paths), "ConjureProjectsSheet");
}
