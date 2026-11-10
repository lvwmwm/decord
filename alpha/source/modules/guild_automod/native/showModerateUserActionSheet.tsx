// Module ID: 13505
// Function ID: 13506
// Name: showModerateUserActionSheet
// Dependencies: [5376, 13506, 2118, 2]
// Exports: default

// Module 13505 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13506, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
