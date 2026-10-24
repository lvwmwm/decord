// Module ID: 11300
// Function ID: 11301
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5210, 11301, 2002, 2]
// Exports: default

// Module 11300 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11301, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
