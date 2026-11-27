// Module ID: 14286
// Function ID: 14287
// Name: openConjureProjectsSheet
// Dependencies: [6934, 14287, 11462, 5257, 14290, 2120, 2]
// Exports: default, showConjureProjectsSheet

// Module 14286 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11462 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 14287 */;
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
  obj2.openLazy(asyncRequire(14290, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14290, dependencyMap.paths), "ConjureProjectsSheet");
}
