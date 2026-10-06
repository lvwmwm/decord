// Module ID: 11457
// Function ID: 11458
// Name: showModerateUserActionSheet
// Dependencies: [4860, 11458, 1987, 2]
// Exports: default

// Module 11457 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11458, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
