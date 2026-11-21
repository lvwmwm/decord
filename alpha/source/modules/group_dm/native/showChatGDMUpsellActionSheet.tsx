// Module ID: 12071
// Function ID: 12072
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5127, 12072, 2119, 2]
// Exports: default

// Module 12071 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12072, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
