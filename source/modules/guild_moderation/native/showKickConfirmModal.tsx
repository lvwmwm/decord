// Module ID: 11416
// Function ID: 11417
// Name: showKickConfirmModal
// Dependencies: [4347, 4611, 11417, 2009, 2]
// Exports: default

// Module 11416 (showKickConfirmModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;
import _modDef4611 from "module_4611" /* 4611 */;

const result = set.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4611.pushLazy(asyncRequireImpl(11417, dependencyMap.paths), closure_0);
};
