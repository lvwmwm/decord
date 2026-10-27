// Module ID: 11307
// Function ID: 11308
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5211, 11308, 1999, 2]
// Exports: default

// Module 11307 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11308, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
