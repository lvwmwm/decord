// Module ID: 12241
// Function ID: 12242
// Name: showModerateUserActionSheet
// Dependencies: [5008, 12242, 2119, 2]
// Exports: default

// Module 12241 (showModerateUserActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12242, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
