// Module ID: 11108
// Function ID: 11109
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4412, 11109, 2009, 2]
// Exports: default

// Module 11108 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11109, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
