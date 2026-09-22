// Module ID: 11967
// Function ID: 11968
// Name: showModerateUserActionSheet
// Dependencies: [4603, 11968, 1896, 2]
// Exports: default

// Module 11967 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11968, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
