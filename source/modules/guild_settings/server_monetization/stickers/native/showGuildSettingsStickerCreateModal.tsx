// Module ID: 16434
// Function ID: 16435
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4161, 4399, 16435, 1959, 2]
// Exports: default

// Module 16434 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4161).hideActionSheet();
  const obj = importDefault(4161);
  importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(16435, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
