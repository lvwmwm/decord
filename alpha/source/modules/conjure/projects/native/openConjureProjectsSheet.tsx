// Module ID: 13141
// Function ID: 13142
// Name: openConjureProjectsSheet
// Dependencies: [6964, 11109, 5381, 13142, 2123, 2]
// Exports: default, openConjureProjectsSheetForGuild

// Module 13141 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11109 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;
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
  obj2.openLazy(asyncRequire(13142, dependencyMap.paths), "ConjureProjectsSheet");
};
export function openConjureProjectsSheetForGuild(guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId };
  obj.openLazy(asyncRequire(13142, dependencyMap.paths), "ConjureProjectsSheet", obj2);
}
