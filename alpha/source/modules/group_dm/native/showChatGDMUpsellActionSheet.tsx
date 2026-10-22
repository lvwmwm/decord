// Module ID: 11264
// Function ID: 11265
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5196, 11265, 2002, 2]
// Exports: default

// Module 11264 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11265, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
