// Module ID: 11347
// Function ID: 11348
// Name: showModerateUserActionSheet
// Dependencies: [5055, 11348, 2000, 2]
// Exports: default

// Module 11347 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11348, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
