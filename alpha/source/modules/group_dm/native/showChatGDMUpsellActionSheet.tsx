// Module ID: 11398
// Function ID: 11399
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5247, 11399, 2000, 2]
// Exports: default

// Module 11398 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11399, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
