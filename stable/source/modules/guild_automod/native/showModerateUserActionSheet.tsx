// Module ID: 11186
// Function ID: 11187
// Name: showModerateUserActionSheet
// Dependencies: [4801, 11187, 1987, 2]
// Exports: default

// Module 11186 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11187, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
