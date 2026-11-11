// Module ID: 12462
// Function ID: 12463
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5489, 12463, 2118, 2]
// Exports: default

// Module 12462 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12463, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
