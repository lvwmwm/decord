// Module ID: 12286
// Function ID: 12287
// Name: showModerateUserActionSheet
// Dependencies: [5037, 12287, 2121, 2]
// Exports: default

// Module 12286 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12287, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
