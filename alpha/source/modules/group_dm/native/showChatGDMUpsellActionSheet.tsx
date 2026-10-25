// Module ID: 11301
// Function ID: 11302
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5210, 11302, 2002, 2]
// Exports: default

// Module 11301 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11302, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
