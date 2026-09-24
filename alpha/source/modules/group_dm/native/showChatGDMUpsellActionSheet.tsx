// Module ID: 11940
// Function ID: 11941
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4796, 11941, 1980, 2]
// Exports: default

// Module 11940 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11941, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
