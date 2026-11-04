// Module ID: 12811
// Function ID: 12812
// Name: showModerateUserActionSheet
// Dependencies: [5242, 12812, 2002, 2]
// Exports: default

// Module 12811 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12812, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
