// Module ID: 16658
// Function ID: 16659
// Name: showGuildSettingsStickerError
// Dependencies: [4002, 7793, 1236, 4259, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 16658 (showGuildSettingsStickerError)
const result = require("getSystemLocale").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = importDefault(4002);
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: require(7793) /* CircleErrorIcon */.CircleErrorIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = importDefault(4002);
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: require(4259) /* CircleInformationIcon */.CircleInformationIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["+c5xtT"]);
  obj.open(obj);
};
