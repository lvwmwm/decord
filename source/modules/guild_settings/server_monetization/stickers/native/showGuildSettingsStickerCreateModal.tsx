// Module ID: 16736
// Function ID: 16737
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4310, 4550, 16737, 2007, 2]
// Exports: default

// Module 16736 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(16737, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
