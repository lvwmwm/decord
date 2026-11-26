// Module ID: 14279
// Function ID: 14280
// Name: openConjureProjectsSheet
// Dependencies: [6934, 14280, 11487, 5257, 14283, 2120, 2]
// Exports: default, showConjureProjectsSheet

// Module 14279 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11487 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 14280 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
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
  obj2.openLazy(asyncRequire(14283, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14283, dependencyMap.paths), "ConjureProjectsSheet");
}
