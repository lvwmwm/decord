// Module ID: 13690
// Function ID: 13691
// Name: openConjureProjectsSheet
// Dependencies: [6500, 13691, 12226, 5006, 13694, 2121, 2]
// Exports: default, showConjureProjectsSheet

// Module 13690 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12226 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13691 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;
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
  obj2.openLazy(asyncRequire(13694, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13694, dependencyMap.paths), "ConjureProjectsSheet");
}
