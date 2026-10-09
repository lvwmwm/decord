// Module ID: 18245
// Function ID: 18246
// Name: guildSettingsStickerToasts
// Dependencies: [4768, 5001, 1126, 5013, 2]
// Exports: showGuildSettingsStickerError, showGuildSettingsStickerSuccess

// Module 18245 (guildSettingsStickerToasts)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import CircleErrorIcon from "CircleErrorIcon" /* 5001 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5013 */;
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
