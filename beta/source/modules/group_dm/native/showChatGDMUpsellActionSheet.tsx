// Module ID: 10965
// Function ID: 10966
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4801, 10966, 1987, 2]
// Exports: default

// Module 10965 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10966, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
