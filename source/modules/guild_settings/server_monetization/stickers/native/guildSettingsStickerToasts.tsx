// Module ID: 16581
// Function ID: 16582
// Name: showGuildSettingsStickerError
// Dependencies: [4002, 7733, 1236, 4258, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 16581 (showGuildSettingsStickerError)
const result = require("getSystemLocale").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = importDefault(4002);
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: require(7733) /* CircleErrorIcon */.CircleErrorIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = importDefault(4002);
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: require(4258) /* CircleInformationIcon */.CircleInformationIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["+c5xtT"]);
  obj.open(obj);
};
