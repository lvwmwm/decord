// Module ID: 11797
// Function ID: 11798
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5374, 11798, 2118, 2]
// Exports: default

// Module 11797 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11798, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
