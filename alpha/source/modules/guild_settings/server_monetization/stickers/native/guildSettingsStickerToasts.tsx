// Module ID: 18656
// Function ID: 18657
// Name: guildSettingsStickerToasts
// Dependencies: [4865, 1126, 5105, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 18656 (guildSettingsStickerToasts)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4865 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5105 */;
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
