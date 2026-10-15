// Module ID: 12454
// Function ID: 12455
// Name: showModerateUserActionSheet
// Dependencies: [5115, 12455, 2000, 2]
// Exports: default

// Module 12454 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12455, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
