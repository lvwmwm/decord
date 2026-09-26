// Module ID: 11882
// Function ID: 11883
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4755, 11883, 1980, 2]
// Exports: default

// Module 11882 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11883, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
