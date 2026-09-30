// Module ID: 11516
// Function ID: 11517
// Name: showModerateUserActionSheet
// Dependencies: [4830, 11517, 1981, 2]
// Exports: default

// Module 11516 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11517, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
