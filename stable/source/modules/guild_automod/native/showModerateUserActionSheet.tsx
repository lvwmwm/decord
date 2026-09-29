// Module ID: 12116
// Function ID: 12117
// Name: showModerateUserActionSheet
// Dependencies: [4755, 12117, 1980, 2]
// Exports: default

// Module 12116 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12117, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
