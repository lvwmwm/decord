// Module ID: 12747
// Function ID: 12748
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5546, 12748, 2121, 2]
// Exports: default

// Module 12747 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12748, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
