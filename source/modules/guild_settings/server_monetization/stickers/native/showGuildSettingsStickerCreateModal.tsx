// Module ID: 16578
// Function ID: 16579
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4270, 4507, 16579, 1988, 2]
// Exports: default

// Module 16578 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4270).hideActionSheet();
  const obj = importDefault(4270);
  importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(16579, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
