// Module ID: 16513
// Function ID: 16514
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4223, 4460, 16514, 1959, 2]
// Exports: default

// Module 16513 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(16514, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
