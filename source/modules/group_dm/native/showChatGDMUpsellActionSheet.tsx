// Module ID: 11126
// Function ID: 11127
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4413, 11127, 2010, 2]
// Exports: default

// Module 11126 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11127, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
