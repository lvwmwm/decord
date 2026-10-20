// Module ID: 12602
// Function ID: 12603
// Name: showModerateUserActionSheet
// Dependencies: [5171, 12603, 2002, 2]
// Exports: default

// Module 12602 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12603, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
