// Module ID: 12091
// Function ID: 12092
// Name: showModerateUserActionSheet
// Dependencies: [4724, 12092, 1980, 2]
// Exports: default

// Module 12091 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12092, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
