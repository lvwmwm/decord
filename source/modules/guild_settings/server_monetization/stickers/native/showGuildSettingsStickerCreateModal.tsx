// Module ID: 16798
// Function ID: 16799
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4342, 5260, 16799, 2007, 2]
// Exports: default

// Module 16798 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4342).hideActionSheet();
  const obj = importDefault(4342);
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(16799, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};
