// Module ID: 11933
// Function ID: 11934
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4794, 11934, 1980, 2]
// Exports: default

// Module 11933 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11934, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
