// Module ID: 11224
// Function ID: 11225
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4854, 11225, 1987, 2]
// Exports: default

// Module 11224 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11225, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
