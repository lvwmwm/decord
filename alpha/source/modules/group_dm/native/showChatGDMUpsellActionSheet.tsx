// Module ID: 11637
// Function ID: 11638
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5258, 11638, 1994, 2]
// Exports: default

// Module 11637 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11638, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
