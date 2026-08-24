// Module ID: 16891
// Function ID: 16892
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4346, 5265, 16892, 2008, 2]
// Exports: default

// Module 16891 (showGuildSettingsStickerCreateModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import _modDef5265 from "module_5265" /* 5265 */;

const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef5265.pushLazy(asyncRequireImpl(16892, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
