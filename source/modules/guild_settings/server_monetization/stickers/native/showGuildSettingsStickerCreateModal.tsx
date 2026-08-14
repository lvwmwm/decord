// Module ID: 16752
// Function ID: 16753
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4310, 4572, 16753, 2007, 2]
// Exports: default

// Module 16752 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(16753, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
