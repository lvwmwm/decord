// Module ID: 11302
// Function ID: 11303
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4830, 11303, 1981, 2]
// Exports: default

// Module 11302 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11303, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
