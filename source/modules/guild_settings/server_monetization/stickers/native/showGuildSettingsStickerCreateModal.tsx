// Module ID: 16337
// Function ID: 127181
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4099, 4338, 16338, 1935, 2]
// Exports: default

// Module 16337 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  let obj = importDefault(4099);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(16338, dependencyMap.paths), merged, "guild-settings-sticker-create", obj);
};
