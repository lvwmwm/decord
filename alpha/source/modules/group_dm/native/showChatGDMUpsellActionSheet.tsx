// Module ID: 12456
// Function ID: 12457
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5489, 12457, 2118, 2]
// Exports: default

// Module 12456 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12457, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
