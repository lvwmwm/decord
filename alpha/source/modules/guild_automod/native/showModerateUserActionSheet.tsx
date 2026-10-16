// Module ID: 12477
// Function ID: 12478
// Name: showModerateUserActionSheet
// Dependencies: [5118, 12478, 2002, 2]
// Exports: default

// Module 12477 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12478, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
