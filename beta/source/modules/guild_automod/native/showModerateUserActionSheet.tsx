// Module ID: 11963
// Function ID: 11964
// Name: showModerateUserActionSheet
// Dependencies: [4725, 11964, 1984, 2]
// Exports: default

// Module 11963 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11964, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
