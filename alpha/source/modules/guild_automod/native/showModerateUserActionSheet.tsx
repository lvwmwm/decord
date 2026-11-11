// Module ID: 14030
// Function ID: 14031
// Name: showModerateUserActionSheet
// Dependencies: [5489, 14031, 2118, 2]
// Exports: default

// Module 14030 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14031, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
