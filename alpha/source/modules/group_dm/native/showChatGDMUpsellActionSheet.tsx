// Module ID: 11951
// Function ID: 11952
// Name: showChatGDMUpsellActionSheet
// Dependencies: [5008, 11952, 2119, 2]
// Exports: default

// Module 11951 (showChatGDMUpsellActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11952, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
