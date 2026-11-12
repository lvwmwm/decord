// Module ID: 13524
// Function ID: 13525
// Name: showModerateUserActionSheet
// Dependencies: [5406, 13525, 2118, 2]
// Exports: default

// Module 13524 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13525, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
