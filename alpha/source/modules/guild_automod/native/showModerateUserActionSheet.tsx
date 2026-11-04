// Module ID: 13480
// Function ID: 13481
// Name: showModerateUserActionSheet
// Dependencies: [5382, 13481, 2123, 2]
// Exports: default

// Module 13480 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13481, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
