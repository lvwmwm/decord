// Module ID: 11237
// Function ID: 11238
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4860, 11238, 1987, 2]
// Exports: default

// Module 11237 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11238, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
