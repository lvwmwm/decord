// Module ID: 13232
// Function ID: 13233
// Name: openConjureProjectsSheet
// Dependencies: [6982, 11165, 5384, 13233, 2123, 2]
// Exports: default, openConjureProjectsSheetForGuild

// Module 13232 (openConjureProjectsSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11165 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;
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
  obj2.openLazy(asyncRequire(13233, dependencyMap.paths), "ConjureProjectsSheet");
};
export function openConjureProjectsSheetForGuild(guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId };
  obj.openLazy(asyncRequire(13233, dependencyMap.paths), "ConjureProjectsSheet", obj2);
}
