// Module ID: 7627
// Function ID: 61120
// Name: getEmbedThemeColors
// Dependencies: []
// Exports: useEmbedThemeColors

// Module 7627 (getEmbedThemeColors)
function getEmbedThemeColors(arg0) {
  const colors = callback(arg0);
  const baseColors = { borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, headerColor: colors.headerColor };
  return { colors, baseColors };
}
let closure_3 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
const result = obj.experimental_createToken((theme) => {
  const obj = arg1(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return arg1(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result1 = arg1(dependencyMap[1]).experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = arg1(dependencyMap[4]).hexWithOpacity(importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_500, 0.3);
    const obj2 = arg1(dependencyMap[4]);
  }
  return PRIMARY_600;
});
const obj2 = arg1(dependencyMap[1]);
const result2 = arg1(dependencyMap[1]).experimental_createToken((theme) => {
  const obj = arg1(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return arg1(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const obj3 = arg1(dependencyMap[1]);
const result3 = arg1(dependencyMap[1]).experimental_createToken((theme) => {
  const obj = arg1(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return arg1(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const obj4 = arg1(dependencyMap[1]);
const result4 = arg1(dependencyMap[1]).experimental_createToken((theme) => {
  const obj = arg1(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return arg1(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
const obj5 = arg1(dependencyMap[1]);
const result5 = arg1(dependencyMap[1]).experimental_createToken((theme) => {
  const obj = arg1(dependencyMap[2]);
  const isThemeDarkResult = arg1(dependencyMap[2]).isThemeDark(theme.theme);
  const hexWithOpacity = arg1(dependencyMap[4]).hexWithOpacity;
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.WHITE, 0.06);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_860, 0.08);
  }
  return hexWithOpacityResult;
});
const obj6 = arg1(dependencyMap[1]);
const result6 = arg1(dependencyMap[1]).experimental_createToken((theme) => {
  const obj = arg1(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return arg1(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_100;
});
const obj7 = arg1(dependencyMap[1]);
const result7 = arg1(dependencyMap[1]).experimental_createToken((theme) => {
  let str = "#666b73";
  if (!obj.isThemeDark(theme.theme)) {
    str = importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_300;
  }
  return str;
});
const obj8 = arg1(dependencyMap[1]);
const result8 = arg1(dependencyMap[1]).experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = arg1(dependencyMap[4]).hexWithOpacity(importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_200, 0.3);
    const obj2 = arg1(dependencyMap[4]);
  }
  return PRIMARY_600;
});
const obj9 = arg1(dependencyMap[1]);
obj = { acceptBlurpleLabelBackgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BRAND, acceptLabelGreenBackgroundColor: importDefault(dependencyMap[3]).colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, acceptLabelGreenColor: importDefault(dependencyMap[3]).unsafe_rawColors.WHITE, backgroundColor: importDefault(dependencyMap[3]).colors.MOBILE_EMBED_BACKGROUND_DEFAULT, bodyTextColor: importDefault(dependencyMap[3]).colors.TEXT_DEFAULT, clearLabelRedBackgroundColor: importDefault(dependencyMap[3]).unsafe_rawColors.RED_400, clearLabelRedColor: importDefault(dependencyMap[3]).unsafe_rawColors.WHITE, headerColor: importDefault(dependencyMap[3]).colors.TEXT_SUBTLE, subtitleColor: importDefault(dependencyMap[3]).colors.TEXT_SUBTLE, titleColor: importDefault(dependencyMap[3]).colors.MOBILE_TEXT_HEADING_PRIMARY, acceptLabelActiveBackgroundColor: result, acceptLabelDisabledBackgroundColor: result1, acceptLabelDisabledBorderColor: result2, acceptLabelDisabledTextColor: result3, acceptLabelDisabledColor: result4, borderColor: result5, resolvingGradientEnd: result6, resolvingGradientStart: result7, thumbnailBackgroundColor: result8, voiceActiveColor: importDefault(dependencyMap[3]).colors.TEXT_FEEDBACK_POSITIVE, voiceHeaderBackgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_MOD_MUTED, voiceMutedColor: importDefault(dependencyMap[3]).colors.TEXT_MUTED };
let closure_4 = arg1(dependencyMap[1]).createNativeStyleProperties(obj);
const obj10 = arg1(dependencyMap[1]);
const result9 = arg1(dependencyMap[5]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx");

export default getEmbedThemeColors;
export const useEmbedThemeColors = function useEmbedThemeColors(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  return React.useMemo(() => callback(arg0), items);
};
