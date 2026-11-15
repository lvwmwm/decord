// Module ID: 11828
// Function ID: 11829
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5406, 11829, 2118, 2]
// Exports: default

// Module 11828 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11829, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
