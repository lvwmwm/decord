// Module ID: 11601
// Function ID: 11602
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5253, 11602, 1995, 2]
// Exports: default

// Module 11601 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11602, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
