// Module ID: 11391
// Function ID: 11392
// Name: showModerateUserActionSheet
// Dependencies: [5056, 11392, 2000, 2]
// Exports: default

// Module 11391 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11392, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
