// Module ID: 13708
// Function ID: 13709
// Name: openConjureProjectsSheet
// Dependencies: [6529, 13709, 12243, 5037, 13712, 2121, 2]
// Exports: default, showConjureProjectsSheet

// Module 13708 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12243 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13709 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6529 */;
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
  obj2.openLazy(asyncRequire(13712, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13712, dependencyMap.paths), "ConjureProjectsSheet");
}
