// Module ID: 11829
// Function ID: 11830
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5406, 11830, 2118, 2]
// Exports: default

// Module 11829 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11830, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
