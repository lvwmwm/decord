// Module ID: 11296
// Function ID: 11297
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5208, 11297, 2002, 2]
// Exports: default

// Module 11296 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11297, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
