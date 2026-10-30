// Module ID: 14669
// Function ID: 14670
// Name: openConjureProjectsSheet
// Dependencies: [6838, 10957, 5253, 14670, 1995, 2]
// Exports: default

// Module 14669 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10957 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
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
  obj2.openLazy(asyncRequire(14670, dependencyMap.paths), "ConjureProjectsSheet");
};
