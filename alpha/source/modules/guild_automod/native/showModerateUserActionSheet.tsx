// Module ID: 12565
// Function ID: 12566
// Name: showModerateUserActionSheet
// Dependencies: [5155, 12566, 2002, 2]
// Exports: default

// Module 12565 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12566, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
