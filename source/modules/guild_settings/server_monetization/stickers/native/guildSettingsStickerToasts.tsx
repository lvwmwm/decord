// Module ID: 16317
// Function ID: 126987
// Name: showGuildSettingsStickerError
// Dependencies: [3831, 7577, 1212, 4086, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 16317 (showGuildSettingsStickerError)
const result = require("getSystemLocale").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = importDefault(3831);
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: require(7577) /* CircleErrorIcon */.CircleErrorIcon };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = importDefault(3831);
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: require(4086) /* CircleInformationIcon */.CircleInformationIcon };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["+c5xtT"]);
  obj.open(obj);
};
