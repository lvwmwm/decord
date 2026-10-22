// Module ID: 11273
// Function ID: 11274
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5196, 11274, 2002, 2]
// Exports: default

// Module 11273 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11274, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
