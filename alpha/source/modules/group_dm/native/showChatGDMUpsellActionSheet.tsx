// Module ID: 10725
// Function ID: 10726
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5055, 10726, 2000, 2]
// Exports: default

// Module 10725 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10726, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
