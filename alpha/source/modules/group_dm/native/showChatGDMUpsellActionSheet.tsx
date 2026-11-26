// Module ID: 12110
// Function ID: 12111
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5257, 12111, 2120, 2]
// Exports: default

// Module 12110 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12111, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
