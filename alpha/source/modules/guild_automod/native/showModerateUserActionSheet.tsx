// Module ID: 12363
// Function ID: 12364
// Name: showModerateUserActionSheet
// Dependencies: [5127, 12364, 2119, 2]
// Exports: default

// Module 12363 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12364, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
