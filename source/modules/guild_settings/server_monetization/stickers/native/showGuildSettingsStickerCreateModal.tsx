// Module ID: 16267
// Function ID: 126642
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4098, 4337, 16268, 1934, 2]
// Exports: default

// Module 16267 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  let obj = importDefault(4098);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(16268, dependencyMap.paths), merged, "guild-settings-sticker-create", obj);
};
