// Module ID: 12552
// Function ID: 12553
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5552, 12553, 2121, 2]
// Exports: default

// Module 12552 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12553, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
