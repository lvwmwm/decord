// Module ID: 11311
// Function ID: 11312
// Name: showModerateUserActionSheet
// Dependencies: [4800, 11312, 1981, 2]
// Exports: default

// Module 11311 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11312, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
