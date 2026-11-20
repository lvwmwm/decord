// Module ID: 19665
// Function ID: 19666
// Name: guildSettingsStickerToasts
// Dependencies: [5476, 1112, 5498, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 19665 (guildSettingsStickerToasts)
import intl2 from "intl" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5476 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5498 */;
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
