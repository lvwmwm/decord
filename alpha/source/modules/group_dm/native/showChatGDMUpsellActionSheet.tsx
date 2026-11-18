// Module ID: 12032
// Function ID: 12033
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5037, 12033, 2121, 2]
// Exports: default

// Module 12032 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12033, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
