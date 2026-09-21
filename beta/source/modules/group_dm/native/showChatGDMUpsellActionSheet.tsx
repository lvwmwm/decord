// Module ID: 11722
// Function ID: 11723
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4725, 11723, 1984, 2]
// Exports: default

// Module 11722 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11723, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
