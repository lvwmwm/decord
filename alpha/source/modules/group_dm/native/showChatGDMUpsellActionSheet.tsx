// Module ID: 11963
// Function ID: 11964
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5131, 11964, 2119, 2]
// Exports: default

// Module 11963 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11964, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
