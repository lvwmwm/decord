// Module ID: 11153
// Function ID: 11154
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4347, 11154, 2009, 2]
// Exports: default

// Module 11153 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11154, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
