// Module ID: 12837
// Function ID: 12838
// Name: showModerateUserActionSheet
// Dependencies: [5246, 12838, 1999, 2]
// Exports: default

// Module 12837 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12838, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
