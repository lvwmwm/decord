// Module ID: 15020
// Function ID: 15021
// Name: openConjureProjectsSheet
// Dependencies: [7025, 15021, 12956, 5546, 15024, 2121, 2]
// Exports: default, showConjureProjectsSheet

// Module 15020 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12956 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 15021 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
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
  obj2.openLazy(asyncRequire(15024, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15024, dependencyMap.paths), "ConjureProjectsSheet");
}
