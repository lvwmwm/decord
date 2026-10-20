// Module ID: 10761
// Function ID: 10762
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5056, 10762, 2000, 2]
// Exports: default

// Module 10761 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10762, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
