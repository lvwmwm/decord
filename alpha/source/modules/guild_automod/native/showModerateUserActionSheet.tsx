// Module ID: 12790
// Function ID: 12791
// Name: showModerateUserActionSheet
// Dependencies: [5211, 12791, 1999, 2]
// Exports: default

// Module 12790 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12791, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
