// Module ID: 11192
// Function ID: 11193
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5171, 11193, 2002, 2]
// Exports: default

// Module 11192 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11193, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
