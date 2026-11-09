// Module ID: 20154
// Function ID: 20155
// Name: guildSettingsStickerToasts
// Dependencies: [5837, 1113, 5859, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 20154 (guildSettingsStickerToasts)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5859 */;
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
