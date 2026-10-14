// Module ID: 10859
// Function ID: 10860
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5060, 10860, 2000, 2]
// Exports: default

// Module 10859 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10860, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
