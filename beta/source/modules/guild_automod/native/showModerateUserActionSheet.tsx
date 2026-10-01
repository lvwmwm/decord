// Module ID: 11311
// Function ID: 11312
// Name: showModerateUserActionSheet
// Dependencies: [4800, 11312, 1981, 2]
// Exports: default

// Module 11311 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11312, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
