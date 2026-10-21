// Module ID: 12666
// Function ID: 12667
// Name: showModerateUserActionSheet
// Dependencies: [5192, 12667, 2002, 2]
// Exports: default

// Module 12666 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12667, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
