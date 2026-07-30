// Module ID: 16405
// Function ID: 16406
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4157, 4395, 16406, 1959, 2]
// Exports: default

// Module 16405 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4157).hideActionSheet();
  const obj = importDefault(4157);
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(16406, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
