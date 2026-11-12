// Module ID: 14026
// Function ID: 14027
// Name: showModerateUserActionSheet
// Dependencies: [5489, 14027, 2118, 2]
// Exports: default

// Module 14026 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14027, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
