// Module ID: 14135
// Function ID: 14136
// Name: showModerateUserActionSheet
// Dependencies: [5542, 14136, 2121, 2]
// Exports: default

// Module 14135 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14136, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
