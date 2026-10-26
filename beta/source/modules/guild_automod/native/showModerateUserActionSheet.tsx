// Module ID: 12779
// Function ID: 12780
// Name: showModerateUserActionSheet
// Dependencies: [5210, 12780, 2002, 2]
// Exports: default

// Module 12779 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12780, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
