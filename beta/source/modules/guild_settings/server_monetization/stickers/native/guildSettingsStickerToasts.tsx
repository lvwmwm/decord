// Module ID: 17383
// Function ID: 17384
// Name: guildSettingsStickerToasts
// Dependencies: [4531, 6351, 1127, 4788, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 17383 (guildSettingsStickerToasts)
import intl2 from "intl" /* 1127 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4788 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6351 */;
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
