// Module ID: 17381
// Function ID: 17382
// Name: guildSettingsStickerToasts
// Dependencies: [4528, 6028, 1115, 4787, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 17381 (guildSettingsStickerToasts)
import intl2 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4787 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6028 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let intl;
  const tmp = ToastActionCreatorsDefault;
  const open = tmp.open;
  const obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: CircleErrorIcon.CircleErrorIcon, content: intl.string(intl2.t["5NMPSS"]) };
  intl = intl2.intl;
  open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let intl;
  const tmp = ToastActionCreatorsDefault;
  const open = tmp.open;
  const obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: CircleInformationIcon.CircleInformationIcon, content: intl.string(intl2.t["+c5xtT"]) };
  intl = intl2.intl;
  open(obj);
};
