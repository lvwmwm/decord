// Module ID: 14227
// Function ID: 14228
// Name: openConjureProjectsSheet
// Dependencies: [6903, 14228, 11440, 5226, 14231, 2119, 2]
// Exports: default, showConjureProjectsSheet

// Module 14227 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11440 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 14228 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
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
  obj2.openLazy(asyncRequire(14231, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14231, dependencyMap.paths), "ConjureProjectsSheet");
}
