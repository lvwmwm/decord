// Module ID: 12493
// Function ID: 12494
// Name: showModerateUserActionSheet
// Dependencies: [5257, 12494, 2120, 2]
// Exports: default

// Module 12493 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12494, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
