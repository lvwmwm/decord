// Module ID: 13058
// Function ID: 13059
// Name: showModerateUserActionSheet
// Dependencies: [5247, 13059, 2000, 2]
// Exports: default

// Module 13058 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13059, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
