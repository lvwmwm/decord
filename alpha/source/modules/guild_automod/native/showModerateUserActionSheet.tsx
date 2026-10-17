// Module ID: 12548
// Function ID: 12549
// Name: showModerateUserActionSheet
// Dependencies: [5155, 12549, 2002, 2]
// Exports: default

// Module 12548 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12549, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
