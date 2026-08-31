// Module ID: 17128
// Function ID: 17129
// Name: showGuildSettingsStickerError
// Dependencies: [4164, 7676, 1236, 4403, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 17128 (showGuildSettingsStickerError)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4164 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4403 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7676 */;

const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = dispatcherDefault;
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: CircleErrorIcon.CircleErrorIcon, content: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = dispatcherDefault;
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: CircleInformationIcon.CircleInformationIcon, content: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["+c5xtT"]);
  obj.open(obj);
};
