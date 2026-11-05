// Module ID: 11840
// Function ID: 11841
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5384, 11841, 2123, 2]
// Exports: default

// Module 11840 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11841, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
