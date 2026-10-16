// Module ID: 12483
// Function ID: 12484
// Name: showModerateUserActionSheet
// Dependencies: [5118, 12484, 2002, 2]
// Exports: default

// Module 12483 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12484, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
