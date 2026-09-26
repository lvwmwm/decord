// Module ID: 18020
// Function ID: 18021
// Name: guildSettingsStickerToasts
// Dependencies: [4486, 6884, 1115, 4742, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 18020 (guildSettingsStickerToasts)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4742 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6884 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  const obj2 = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: CircleErrorIcon.CircleErrorIcon, content: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["5NMPSS"]);
  ToastActionCreatorsDefault.open(obj2);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  const obj2 = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: CircleInformationIcon.CircleInformationIcon, content: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["+c5xtT"]);
  ToastActionCreatorsDefault.open(obj2);
};
