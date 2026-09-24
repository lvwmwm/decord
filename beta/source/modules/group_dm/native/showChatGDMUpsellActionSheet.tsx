// Module ID: 11758
// Function ID: 11759
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4757, 11759, 1984, 2]
// Exports: default

// Module 11758 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11759, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
