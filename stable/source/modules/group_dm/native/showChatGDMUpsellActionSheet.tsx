// Module ID: 11735
// Function ID: 11736
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4603, 11736, 1896, 2]
// Exports: default

// Module 11735 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11736, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
