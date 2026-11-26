// Module ID: 12485
// Function ID: 12486
// Name: showModerateUserActionSheet
// Dependencies: [5257, 12486, 2120, 2]
// Exports: default

// Module 12485 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12486, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
