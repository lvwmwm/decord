// Module ID: 11177
// Function ID: 11178
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5155, 11178, 2002, 2]
// Exports: default

// Module 11177 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11178, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
