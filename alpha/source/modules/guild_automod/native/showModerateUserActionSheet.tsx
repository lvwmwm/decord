// Module ID: 13395
// Function ID: 13396
// Name: showModerateUserActionSheet
// Dependencies: [5381, 13396, 2123, 2]
// Exports: default

// Module 13395 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13396, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
