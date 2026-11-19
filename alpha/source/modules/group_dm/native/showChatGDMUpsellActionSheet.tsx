// Module ID: 12009
// Function ID: 12010
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5006, 12010, 2121, 2]
// Exports: default

// Module 12009 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12010, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
