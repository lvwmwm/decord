// Module ID: 12062
// Function ID: 12063
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5226, 12063, 2119, 2]
// Exports: default

// Module 12062 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12063, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
