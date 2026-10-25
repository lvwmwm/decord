// Module ID: 12778
// Function ID: 12779
// Name: showModerateUserActionSheet
// Dependencies: [5210, 12779, 2002, 2]
// Exports: default

// Module 12778 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12779, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
