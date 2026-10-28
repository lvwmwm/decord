// Module ID: 14402
// Function ID: 14403
// Name: openConjureProjectsSheet
// Dependencies: [6808, 10856, 5246, 14403, 1999, 2]
// Exports: default

// Module 14402 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10856 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
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
  obj2.openLazy(asyncRequire(14403, dependencyMap.paths), "ConjureProjectsSheet");
};
