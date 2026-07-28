// Module ID: 16376
// Function ID: 127337
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4133, 4372, 16377, 1935, 2]
// Exports: default

// Module 16376 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  let obj = importDefault(4133);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(16377, dependencyMap.paths), merged, "guild-settings-sticker-create", obj);
};
