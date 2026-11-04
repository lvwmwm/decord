// Module ID: 11832
// Function ID: 11833
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5382, 11833, 2123, 2]
// Exports: default

// Module 11832 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11833, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
