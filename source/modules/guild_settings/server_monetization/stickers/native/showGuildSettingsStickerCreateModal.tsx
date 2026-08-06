// Module ID: 16553
// Function ID: 16554
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4253, 4490, 16554, 1988, 2]
// Exports: default

// Module 16553 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(16554, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
