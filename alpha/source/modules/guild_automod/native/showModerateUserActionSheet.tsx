// Module ID: 13491
// Function ID: 13492
// Name: showModerateUserActionSheet
// Dependencies: [5384, 13492, 2123, 2]
// Exports: default

// Module 13491 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13492, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
