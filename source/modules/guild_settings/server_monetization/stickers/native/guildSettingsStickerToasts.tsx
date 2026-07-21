// Module ID: 16145
// Function ID: 124448
// Name: showGuildSettingsStickerError
// Dependencies: []
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 16145 (showGuildSettingsStickerError)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = importDefault(dependencyMap[0]);
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: require(dependencyMap[1]).CircleErrorIcon };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.5NMPSS);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = importDefault(dependencyMap[0]);
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: require(dependencyMap[3]).CircleInformationIcon };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.+c5xtT);
  obj.open(obj);
};
