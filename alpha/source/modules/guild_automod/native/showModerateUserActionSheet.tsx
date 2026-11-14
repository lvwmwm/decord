// Module ID: 14133
// Function ID: 14134
// Name: showModerateUserActionSheet
// Dependencies: [5552, 14134, 2121, 2]
// Exports: default

// Module 14133 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14134, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
