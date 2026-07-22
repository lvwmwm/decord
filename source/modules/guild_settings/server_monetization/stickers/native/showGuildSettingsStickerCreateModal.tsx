// Module ID: 16150
// Function ID: 124469
// Name: showGuildSettingsStickerCreateModal
// Dependencies: []
// Exports: default

// Module 16150 (showGuildSettingsStickerCreateModal)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_2) {
  let obj = importDefault(dependencyMap[0]);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), closure_2, "guild-settings-sticker-create", obj);
};
