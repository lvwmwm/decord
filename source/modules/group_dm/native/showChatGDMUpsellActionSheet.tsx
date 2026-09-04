// Module ID: 11534
// Function ID: 11535
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4448, 11535, 2008, 2]
// Exports: default

// Module 11534 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11535, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
