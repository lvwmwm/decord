// Module ID: 13197
// Function ID: 13198
// Name: openConjureProjectsSheet
// Dependencies: [6924, 13198, 11118, 5404, 13201, 2118, 2]
// Exports: default, showConjureProjectsSheet

// Module 13197 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11118 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13198 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6924 */;
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
  obj2.openLazy(asyncRequire(13201, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13201, dependencyMap.paths), "ConjureProjectsSheet");
}
