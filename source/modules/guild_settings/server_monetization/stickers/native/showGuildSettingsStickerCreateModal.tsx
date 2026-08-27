// Module ID: 17074
// Function ID: 17075
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4412, 4676, 17075, 2009, 2]
// Exports: default

// Module 17074 (showGuildSettingsStickerCreateModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;
import _modDef4676 from "module_4676" /* 4676 */;

const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4676.pushLazy(asyncRequireImpl(17075, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
