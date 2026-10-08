// Module ID: 11352
// Function ID: 11353
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5054, 11353, 1999, 2]
// Exports: default

// Module 11352 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11353, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
