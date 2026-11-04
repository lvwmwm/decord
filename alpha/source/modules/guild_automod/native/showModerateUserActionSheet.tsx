// Module ID: 13479
// Function ID: 13480
// Name: showModerateUserActionSheet
// Dependencies: [5382, 13480, 2123, 2]
// Exports: default

// Module 13479 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13480, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
