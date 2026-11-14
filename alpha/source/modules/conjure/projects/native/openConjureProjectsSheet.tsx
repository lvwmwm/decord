// Module ID: 10532
// Function ID: 10533
// Name: openConjureProjectsSheet
// Dependencies: [7017, 10533, 10536, 5552, 10537, 2121, 2]
// Exports: default, showConjureProjectsSheet

// Module 10532 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 10533 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10536 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
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
  obj2.openLazy(asyncRequire(10537, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10537, dependencyMap.paths), "ConjureProjectsSheet");
}
