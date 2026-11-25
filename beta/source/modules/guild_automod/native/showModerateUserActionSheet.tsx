// Module ID: 12366
// Function ID: 12367
// Name: showModerateUserActionSheet
// Dependencies: [5127, 12367, 2119, 2]
// Exports: default

// Module 12366 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12367, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
