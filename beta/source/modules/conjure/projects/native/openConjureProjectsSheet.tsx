// Module ID: 13251
// Function ID: 13252
// Name: openConjureProjectsSheet
// Dependencies: [6932, 13252, 11136, 5406, 13255, 2118, 2]
// Exports: default, showConjureProjectsSheet

// Module 13251 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11136 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13252 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6932 */;
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
  obj2.openLazy(asyncRequire(13255, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13255, dependencyMap.paths), "ConjureProjectsSheet");
}
