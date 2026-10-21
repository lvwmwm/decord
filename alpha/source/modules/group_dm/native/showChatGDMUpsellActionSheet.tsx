// Module ID: 11247
// Function ID: 11248
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5192, 11248, 2002, 2]
// Exports: default

// Module 11247 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11248, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
