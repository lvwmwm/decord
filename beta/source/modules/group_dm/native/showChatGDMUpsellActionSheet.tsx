// Module ID: 12554
// Function ID: 12555
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5542, 12555, 2121, 2]
// Exports: default

// Module 12554 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12555, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
