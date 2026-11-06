// Module ID: 11806
// Function ID: 11807
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5404, 11807, 2118, 2]
// Exports: default

// Module 11806 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11807, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
