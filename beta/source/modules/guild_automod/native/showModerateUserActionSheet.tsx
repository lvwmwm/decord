// Module ID: 11999
// Function ID: 12000
// Name: showModerateUserActionSheet
// Dependencies: [4757, 12000, 1984, 2]
// Exports: default

// Module 11999 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12000, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
