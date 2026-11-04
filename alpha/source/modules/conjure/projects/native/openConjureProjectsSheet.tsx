// Module ID: 13224
// Function ID: 13225
// Name: openConjureProjectsSheet
// Dependencies: [6979, 11157, 5382, 13225, 2123, 2]
// Exports: default, openConjureProjectsSheetForGuild

// Module 13224 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11157 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === ConjureProjectStore.getOwnedProjects().length) {
      if (0 === ConjureProjectStore.getSharedWithMeProjects().length) {
        openConjureHomeScreenDefault();
      }
    }
  }
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(13225, dependencyMap.paths), "ConjureProjectsSheet");
};
export function openConjureProjectsSheetForGuild(guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId };
  obj.openLazy(asyncRequire(13225, dependencyMap.paths), "ConjureProjectsSheet", obj2);
}
