// Module ID: 13209
// Function ID: 13210
// Name: showModerateUserActionSheet
// Dependencies: [5253, 13210, 1995, 2]
// Exports: default

// Module 13209 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13210, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
