// Module ID: 16801
// Function ID: 16802
// Name: showGuildSettingsStickerError
// Dependencies: [4094, 8074, 1236, 4330, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 16801 (showGuildSettingsStickerError)
const result = require("getSystemLocale").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = importDefault(4094);
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: require(8074) /* CircleErrorIcon */.CircleErrorIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = importDefault(4094);
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: require(4330) /* CircleInformationIcon */.CircleInformationIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["+c5xtT"]);
  obj.open(obj);
};
