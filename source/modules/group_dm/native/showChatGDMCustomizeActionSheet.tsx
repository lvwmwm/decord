// Module ID: 10850
// Function ID: 10851
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4448, 4731, 10851, 2008, 2]
// Exports: default

// Module 10850 (showChatGDMCustomizeActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4731.pushLazy(asyncRequireImpl(10851, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
