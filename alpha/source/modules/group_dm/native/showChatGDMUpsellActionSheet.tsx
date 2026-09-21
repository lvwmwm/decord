// Module ID: 11853
// Function ID: 11854
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4723, 11854, 1980, 2]
// Exports: default

// Module 11853 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11854, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
