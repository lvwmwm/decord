// Module ID: 11389
// Function ID: 11390
// Name: showModerateUserActionSheet
// Dependencies: [5056, 11390, 2000, 2]
// Exports: default

// Module 11389 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11390, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
