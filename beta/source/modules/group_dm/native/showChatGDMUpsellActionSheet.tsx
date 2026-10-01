// Module ID: 11097
// Function ID: 11098
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4800, 11098, 1981, 2]
// Exports: default

// Module 11097 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11098, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
