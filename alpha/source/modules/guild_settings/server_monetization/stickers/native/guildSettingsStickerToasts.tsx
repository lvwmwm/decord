// Module ID: 19685
// Function ID: 19686
// Name: guildSettingsStickerToasts
// Dependencies: [5707, 1114, 5730, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 19685 (guildSettingsStickerToasts)
import intl2 from "intl" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export function showGuildSettingsStickerError() {
  let intl;
  const obj = { text: intl.string(intl2.t["5NMPSS"]), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("GUILD_SETTINGS_STICKER_ERROR", obj);
}
export function showGuildSettingsStickerSuccess() {
  let intl;
  const obj = { text: intl.string(intl2.t["+c5xtT"]), icon: CircleInformationIcon.CircleInformationIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("GUILD_SETTINGS_STICKER_SUCCESS", obj);
}
