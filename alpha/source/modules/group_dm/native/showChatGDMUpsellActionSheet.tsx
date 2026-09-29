// Module ID: 11266
// Function ID: 11267
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4800, 11267, 1981, 2]
// Exports: default

// Module 11266 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11267, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
