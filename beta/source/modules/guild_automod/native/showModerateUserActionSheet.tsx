// Module ID: 12087
// Function ID: 12088
// Name: showModerateUserActionSheet
// Dependencies: [4723, 12088, 1980, 2]
// Exports: default

// Module 12087 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12088, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
