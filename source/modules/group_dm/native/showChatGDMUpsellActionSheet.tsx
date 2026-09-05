// Module ID: 11602
// Function ID: 11603
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4527, 11603, 1896, 2]
// Exports: default

// Module 11602 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11603, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
