// Module ID: 16325
// Function ID: 127134
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4099, 4338, 16326, 1935, 2]
// Exports: default

// Module 16325 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  let obj = importDefault(4099);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(16326, dependencyMap.paths), merged, "guild-settings-sticker-create", obj);
};
