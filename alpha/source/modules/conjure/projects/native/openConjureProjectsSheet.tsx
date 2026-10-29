// Module ID: 14636
// Function ID: 14637
// Name: openConjureProjectsSheet
// Dependencies: [6831, 10932, 5247, 14637, 2000, 2]
// Exports: default

// Module 14636 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10932 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
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
  obj2.openLazy(asyncRequire(14637, dependencyMap.paths), "ConjureProjectsSheet");
};
