// Module ID: 7387
// Function ID: 7388
// Name: getEmbedThemeColors
// Dependencies: [19, 4836, 4685, 576, 4683, 2]
// Exports: default, useEmbedThemeColors

// Module 7387 (getEmbedThemeColors)
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4685 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let theme;

let tmp;
const ColorUtils = tmp(4683);
let createStyles = createStyles_mod;
const result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = createStyles_mod;
const result1 = createStyles.experimental_createToken((theme) => {
  let PRIMARY_600;
  theme = theme.theme;
  const obj = shared;
  if (obj.isThemeDark(theme)) {
    PRIMARY_600 = nativeDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    const tmpResult = ColorUtils;
    PRIMARY_600 = tmpResult.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.3);
  }
  return PRIMARY_600;
});
createStyles = createStyles_mod;
const result2 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = createStyles_mod;
const result3 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = createStyles_mod;
const result4 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
createStyles = createStyles_mod;
const result5 = createStyles.experimental_createToken((theme) => {
  let hexWithOpacityResult;
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  ColorUtils;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.WHITE, 0.06);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_860, 0.08);
  }
  return hexWithOpacityResult;
});
createStyles = createStyles_mod;
const result6 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_100;
});
createStyles = createStyles_mod;
const result7 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  let str = "#666b73";
  const obj = shared;
  if (!obj.isThemeDark(theme)) {
    str = nativeDefault.unsafe_rawColors.PRIMARY_300;
  }
  return str;
});
createStyles = createStyles_mod;
const result8 = createStyles.experimental_createToken((theme) => {
  let PRIMARY_600;
  theme = theme.theme;
  const obj = shared;
  if (obj.isThemeDark(theme)) {
    PRIMARY_600 = nativeDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    const tmpResult = ColorUtils;
    PRIMARY_600 = tmpResult.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_200, 0.3);
  }
  return PRIMARY_600;
});
createStyles = createStyles_mod;
let obj = { acceptBlurpleLabelBackgroundColor: nativeDefault.colors.BACKGROUND_BRAND, acceptLabelGreenBackgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, acceptLabelGreenColor: nativeDefault.unsafe_rawColors.WHITE, backgroundColor: nativeDefault.colors.MOBILE_EMBED_BACKGROUND_DEFAULT, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, clearLabelRedBackgroundColor: nativeDefault.unsafe_rawColors.RED_400, clearLabelRedColor: nativeDefault.unsafe_rawColors.WHITE, headerColor: nativeDefault.colors.TEXT_SUBTLE, subtitleColor: nativeDefault.colors.TEXT_SUBTLE, titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, acceptLabelActiveBackgroundColor: result, acceptLabelDisabledBackgroundColor: result1, acceptLabelDisabledBorderColor: result2, acceptLabelDisabledTextColor: result3, acceptLabelDisabledColor: result4, borderColor: result5, resolvingGradientEnd: result6, resolvingGradientStart: result7, thumbnailBackgroundColor: result8, voiceActiveColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, voiceHeaderBackgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, voiceMutedColor: nativeDefault.colors.TEXT_MUTED };
let closure_4 = createStyles.createNativeStyleProperties(obj);
const result9 = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx");

export default function getEmbedThemeColors(arg0) {
  const tmp = closure_4(arg0);
  return { colors: tmp, baseColors: { borderColor: tmp.borderColor, backgroundColor: tmp.backgroundColor, thumbnailCornerRadius: 15, headerColor: tmp.headerColor } };
};
export const useEmbedThemeColors = function useEmbedThemeColors(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const tmp = closure_4(closure_0);
    return { colors: tmp, baseColors: { borderColor: tmp.borderColor, backgroundColor: tmp.backgroundColor, thumbnailCornerRadius: 15, headerColor: tmp.headerColor } };
  }, items);
};
