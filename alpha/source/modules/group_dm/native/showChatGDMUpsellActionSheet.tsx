// Module ID: 11083
// Function ID: 11084
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5115, 11084, 2000, 2]
// Exports: default

// Module 11083 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11084, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
