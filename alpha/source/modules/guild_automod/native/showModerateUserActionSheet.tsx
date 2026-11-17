// Module ID: 12999
// Function ID: 13000
// Name: showModerateUserActionSheet
// Dependencies: [5546, 13000, 2121, 2]
// Exports: default

// Module 12999 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13000, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
