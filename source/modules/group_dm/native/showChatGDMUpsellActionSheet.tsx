// Module ID: 11413
// Function ID: 11414
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4445, 11414, 2008, 2]
// Exports: default

// Module 11413 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11414, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
