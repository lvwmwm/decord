// Module ID: 16414
// Function ID: 16415
// Name: showGuildSettingsStickerError
// Dependencies: [3890, 6730, 1236, 4145, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 16414 (showGuildSettingsStickerError)
const result = require("getSystemLocale").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = importDefault(3890);
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: require(6730) /* CircleErrorIcon */.CircleErrorIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = importDefault(3890);
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: require(4145) /* CircleInformationIcon */.CircleInformationIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["+c5xtT"]);
  obj.open(obj);
};
