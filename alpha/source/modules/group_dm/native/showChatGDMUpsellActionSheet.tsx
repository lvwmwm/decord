// Module ID: 11638
// Function ID: 11639
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5258, 11639, 1994, 2]
// Exports: default

// Module 11638 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11639, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
