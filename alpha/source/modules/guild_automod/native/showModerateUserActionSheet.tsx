// Module ID: 13466
// Function ID: 13467
// Name: showModerateUserActionSheet
// Dependencies: [5404, 13467, 2118, 2]
// Exports: default

// Module 13466 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13467, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
