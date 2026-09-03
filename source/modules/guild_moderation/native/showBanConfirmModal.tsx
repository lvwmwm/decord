// Module ID: 11658
// Function ID: 11659
// Name: showBanConfirmModal
// Dependencies: [4445, 4724, 11659, 2008, 2]
// Exports: default

// Module 11658 (showBanConfirmModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import _modDef4724 from "module_4724" /* 4724 */;

const result = set.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4724.pushLazy(asyncRequireImpl(11659, dependencyMap.paths), closure_0);
};
