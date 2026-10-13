// Module ID: 12183
// Function ID: 12184
// Name: showModerateUserActionSheet
// Dependencies: [5056, 12184, 2000, 2]
// Exports: default

// Module 12183 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12184, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
