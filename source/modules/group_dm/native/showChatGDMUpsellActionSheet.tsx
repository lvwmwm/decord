// Module ID: 11192
// Function ID: 11193
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4445, 11193, 2009, 2]
// Exports: default

// Module 11192 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11193, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
