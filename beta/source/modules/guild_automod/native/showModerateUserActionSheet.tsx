// Module ID: 13492
// Function ID: 13493
// Name: showModerateUserActionSheet
// Dependencies: [5374, 13493, 2118, 2]
// Exports: default

// Module 13492 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13493, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
