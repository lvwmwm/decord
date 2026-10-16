// Module ID: 11095
// Function ID: 11096
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5118, 11096, 2002, 2]
// Exports: default

// Module 11095 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11096, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
