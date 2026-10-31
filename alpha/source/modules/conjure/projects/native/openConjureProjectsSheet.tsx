// Module ID: 14707
// Function ID: 14708
// Name: openConjureProjectsSheet
// Dependencies: [6844, 10976, 5258, 14708, 1994, 2]
// Exports: default

// Module 14707 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10976 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  const obj = ConjureProjectStore;
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === obj.getOwnedProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(14708, dependencyMap.paths), "ConjureProjectsSheet");
};
