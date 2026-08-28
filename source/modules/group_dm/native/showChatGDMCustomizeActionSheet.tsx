// Module ID: 10595
// Function ID: 10596
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4413, 4689, 10596, 2010, 2]
// Exports: default

// Module 10595 (showChatGDMCustomizeActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import _modDef4689 from "module_4689" /* 4689 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4689.pushLazy(asyncRequireImpl(10596, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
