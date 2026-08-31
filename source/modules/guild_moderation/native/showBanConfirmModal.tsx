// Module ID: 11392
// Function ID: 11393
// Name: showBanConfirmModal
// Dependencies: [4415, 4691, 11393, 2009, 2]
// Exports: default

// Module 11392 (showBanConfirmModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;
import _modDef4691 from "module_4691" /* 4691 */;

const result = set.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4691.pushLazy(asyncRequireImpl(11393, dependencyMap.paths), closure_0);
};
