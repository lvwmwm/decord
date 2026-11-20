// Module ID: 13659
// Function ID: 13660
// Name: openConjureProjectsSheet
// Dependencies: [6502, 13660, 12168, 5008, 13663, 2119, 2]
// Exports: default, showConjureProjectsSheet

// Module 13659 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12168 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13660 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
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
  obj2.openLazy(asyncRequire(13663, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13663, dependencyMap.paths), "ConjureProjectsSheet");
}
