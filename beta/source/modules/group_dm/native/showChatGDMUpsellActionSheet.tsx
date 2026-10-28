// Module ID: 11335
// Function ID: 11336
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5242, 11336, 2002, 2]
// Exports: default

// Module 11335 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11336, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
