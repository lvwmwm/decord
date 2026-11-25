// Module ID: 13782
// Function ID: 13783
// Name: openConjureProjectsSheet
// Dependencies: [6621, 13783, 12293, 5127, 13786, 2119, 2]
// Exports: default, showConjureProjectsSheet

// Module 13782 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12293 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13783 */;
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
  obj2.openLazy(asyncRequire(13786, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13786, dependencyMap.paths), "ConjureProjectsSheet");
}
