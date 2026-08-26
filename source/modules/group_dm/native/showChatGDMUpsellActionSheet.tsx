// Module ID: 11225
// Function ID: 11226
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4411, 11226, 2009, 2]
// Exports: default

// Module 11225 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11226, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
