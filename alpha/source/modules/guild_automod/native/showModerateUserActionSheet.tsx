// Module ID: 12698
// Function ID: 12699
// Name: showModerateUserActionSheet
// Dependencies: [5196, 12699, 2002, 2]
// Exports: default

// Module 12698 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12699, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
