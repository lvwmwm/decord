// Module ID: 19389
// Function ID: 19390
// Name: guildSettingsStickerToasts
// Dependencies: [5699, 1125, 5722, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 19389 (guildSettingsStickerToasts)
import intl2 from "intl" /* 1125 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5722 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let intl;
  const obj = { text: intl.string(intl2.t["5NMPSS"]), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("GUILD_SETTINGS_STICKER_ERROR", obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let intl;
  const obj = { text: intl.string(intl2.t["+c5xtT"]), icon: CircleInformationIcon.CircleInformationIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("GUILD_SETTINGS_STICKER_SUCCESS", obj);
};
