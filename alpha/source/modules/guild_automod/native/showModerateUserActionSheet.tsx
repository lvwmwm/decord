// Module ID: 12585
// Function ID: 12586
// Name: showModerateUserActionSheet
// Dependencies: [5171, 12586, 2002, 2]
// Exports: default

// Module 12585 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12586, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
