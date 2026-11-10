// Module ID: 13259
// Function ID: 13260
// Name: showModerateUserActionSheet
// Dependencies: [5258, 13260, 1994, 2]
// Exports: default

// Module 13259 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13260, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
