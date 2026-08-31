// Module ID: 10619
// Function ID: 10620
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4415, 4691, 10620, 2009, 2]
// Exports: default

// Module 10619 (showChatGDMCustomizeActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;
import _modDef4691 from "module_4691" /* 4691 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4691.pushLazy(asyncRequireImpl(10620, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
