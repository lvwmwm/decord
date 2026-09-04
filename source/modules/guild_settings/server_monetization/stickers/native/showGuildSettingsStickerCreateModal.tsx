// Module ID: 17497
// Function ID: 17498
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4448, 4731, 17498, 2008, 2]
// Exports: default

// Module 17497 (showGuildSettingsStickerCreateModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4731.pushLazy(asyncRequireImpl(17498, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
