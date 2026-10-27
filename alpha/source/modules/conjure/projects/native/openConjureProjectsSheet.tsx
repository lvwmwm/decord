// Module ID: 14178
// Function ID: 14179
// Name: openConjureProjectsSheet
// Dependencies: [6774, 10821, 5211, 14179, 1999, 2]
// Exports: default

// Module 14178 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10821 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;
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
  obj2.openLazy(asyncRequire(14179, dependencyMap.paths), "ConjureProjectsSheet");
};
