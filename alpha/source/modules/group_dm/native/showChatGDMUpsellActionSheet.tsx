// Module ID: 11775
// Function ID: 11776
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5381, 11776, 2123, 2]
// Exports: default

// Module 11775 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11776, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
