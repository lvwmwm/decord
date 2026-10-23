// Module ID: 12736
// Function ID: 12737
// Name: showModerateUserActionSheet
// Dependencies: [5208, 12737, 2002, 2]
// Exports: default

// Module 12736 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12737, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
