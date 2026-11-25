// Module ID: 12436
// Function ID: 12437
// Name: showModerateUserActionSheet
// Dependencies: [5226, 12437, 2119, 2]
// Exports: default

// Module 12436 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12437, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
