// Module ID: 16734
// Function ID: 16735
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4312, 4549, 16735, 2007, 2]
// Exports: default

// Module 16734 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4312).hideActionSheet();
  const obj = importDefault(4312);
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(16735, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
