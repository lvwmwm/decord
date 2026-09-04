// Module ID: 11789
// Function ID: 11790
// Name: showBanConfirmModal
// Dependencies: [4448, 4731, 11790, 2008, 2]
// Exports: default

// Module 11789 (showBanConfirmModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4731.pushLazy(asyncRequireImpl(11790, dependencyMap.paths), closure_0);
};
