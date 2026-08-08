// Module ID: 16655
// Function ID: 16656
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4271, 4509, 16656, 1988, 2]
// Exports: default

// Module 16655 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(16656, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
