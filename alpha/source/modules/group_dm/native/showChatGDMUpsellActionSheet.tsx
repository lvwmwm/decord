// Module ID: 11857
// Function ID: 11858
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4724, 11858, 1980, 2]
// Exports: default

// Module 11857 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11858, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
