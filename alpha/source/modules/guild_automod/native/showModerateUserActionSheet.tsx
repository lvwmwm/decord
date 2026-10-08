// Module ID: 11440
// Function ID: 11441
// Name: showModerateUserActionSheet
// Dependencies: [5054, 11441, 1999, 2]
// Exports: default

// Module 11440 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11441, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
