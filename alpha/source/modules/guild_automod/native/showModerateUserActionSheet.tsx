// Module ID: 12269
// Function ID: 12270
// Name: showModerateUserActionSheet
// Dependencies: [5131, 12270, 2119, 2]
// Exports: default

// Module 12269 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12270, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
