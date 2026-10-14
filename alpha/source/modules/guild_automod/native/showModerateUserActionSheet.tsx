// Module ID: 12219
// Function ID: 12220
// Name: showModerateUserActionSheet
// Dependencies: [5060, 12220, 2000, 2]
// Exports: default

// Module 12219 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12220, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
