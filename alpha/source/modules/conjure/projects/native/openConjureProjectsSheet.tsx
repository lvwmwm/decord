// Module ID: 13234
// Function ID: 13235
// Name: openConjureProjectsSheet
// Dependencies: [6902, 13235, 11113, 5376, 13238, 2118, 2]
// Exports: default, showConjureProjectsSheet

// Module 13234 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11113 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13235 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6902 */;
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
  obj2.openLazy(asyncRequire(13238, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13238, dependencyMap.paths), "ConjureProjectsSheet");
}
