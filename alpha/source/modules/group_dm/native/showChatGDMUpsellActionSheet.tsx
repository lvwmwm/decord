// Module ID: 11304
// Function ID: 11305
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5210, 11305, 2002, 2]
// Exports: default

// Module 11304 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11305, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
