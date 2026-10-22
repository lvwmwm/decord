// Module ID: 12560
// Function ID: 12561
// Name: showModerateUserActionSheet
// Dependencies: [5155, 12561, 2002, 2]
// Exports: default

// Module 12560 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12561, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
