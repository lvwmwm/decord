// Module ID: 11158
// Function ID: 11159
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5155, 11159, 2002, 2]
// Exports: default

// Module 11158 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11159, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
