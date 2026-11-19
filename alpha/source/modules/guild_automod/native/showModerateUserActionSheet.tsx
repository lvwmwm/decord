// Module ID: 12269
// Function ID: 12270
// Name: showModerateUserActionSheet
// Dependencies: [5006, 12270, 2121, 2]
// Exports: default

// Module 12269 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12270, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
