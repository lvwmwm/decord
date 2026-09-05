// Module ID: 11857
// Function ID: 11858
// Name: showBanConfirmModal
// Dependencies: [4527, 4763, 11858, 1896, 2]
// Exports: default

// Module 11857 (showBanConfirmModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import _modDef4763 from "module_4763" /* 4763 */;

const result = set.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4763.pushLazy(asyncRequireImpl(11858, dependencyMap.paths), closure_0);
};
