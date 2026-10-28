// Module ID: 11344
// Function ID: 11345
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5246, 11345, 1999, 2]
// Exports: default

// Module 11344 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11345, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
