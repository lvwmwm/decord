// Module ID: 11418
// Function ID: 11419
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4445, 11419, 2008, 2]
// Exports: default

// Module 11418 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11419, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
