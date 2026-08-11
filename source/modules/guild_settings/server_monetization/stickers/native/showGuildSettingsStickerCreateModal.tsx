// Module ID: 16676
// Function ID: 16677
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4271, 4509, 16677, 2007, 2]
// Exports: default

// Module 16676 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(16677, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
