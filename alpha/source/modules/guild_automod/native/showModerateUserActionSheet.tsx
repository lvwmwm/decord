// Module ID: 13244
// Function ID: 13245
// Name: showModerateUserActionSheet
// Dependencies: [5258, 13245, 1994, 2]
// Exports: default

// Module 13244 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13245, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
