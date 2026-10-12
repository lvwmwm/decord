// Module ID: 10760
// Function ID: 10761
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5056, 10761, 2000, 2]
// Exports: default

// Module 10760 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10761, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
