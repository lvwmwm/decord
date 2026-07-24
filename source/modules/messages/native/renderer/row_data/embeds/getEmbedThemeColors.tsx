// Module ID: 7722
// Function ID: 61443
// Name: getEmbedThemeColors
// Dependencies: [31, 4130, 3976, 689, 3974, 2]
// Exports: useEmbedThemeColors

// Module 7722 (getEmbedThemeColors)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function getEmbedThemeColors(arg0) {
  const colors = _createForOfIteratorHelperLoose(arg0);
  const baseColors = { borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, headerColor: colors.headerColor };
  return { colors, baseColors };
}
const result = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  return require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result1 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = importDefault(689).unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = require(3974) /* hexToRgb */.hexWithOpacity(importDefault(689).unsafe_rawColors.PRIMARY_500, 0.3);
    const obj2 = require(3974) /* hexToRgb */;
  }
  return PRIMARY_600;
});
const result2 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  return require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result3 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  return require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result4 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  return require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
const result5 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3976) /* AccessibilityAnnouncer */;
  const isThemeDarkResult = require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme.theme);
  const hexWithOpacity = require(3974) /* hexToRgb */.hexWithOpacity;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.WHITE, 0.06);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_860, 0.08);
  }
  return hexWithOpacityResult;
});
const result6 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  return require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_100;
});
const result7 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  let str = "#666b73";
  if (!obj.isThemeDark(theme.theme)) {
    str = importDefault(689).unsafe_rawColors.PRIMARY_300;
  }
  return str;
});
const result8 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = importDefault(689).unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = require(3974) /* hexToRgb */.hexWithOpacity(importDefault(689).unsafe_rawColors.PRIMARY_200, 0.3);
    const obj2 = require(3974) /* hexToRgb */;
  }
  return PRIMARY_600;
});
_createForOfIteratorHelperLoose = { acceptBlurpleLabelBackgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, acceptLabelGreenBackgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, acceptLabelGreenColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EMBED_BACKGROUND_DEFAULT, bodyTextColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, clearLabelRedBackgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, clearLabelRedColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, headerColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, subtitleColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, titleColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, acceptLabelActiveBackgroundColor: result, acceptLabelDisabledBackgroundColor: result1, acceptLabelDisabledBorderColor: result2, acceptLabelDisabledTextColor: result3, acceptLabelDisabledColor: result4, borderColor: result5, resolvingGradientEnd: result6, resolvingGradientStart: result7, thumbnailBackgroundColor: result8, voiceActiveColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE, voiceHeaderBackgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, voiceMutedColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createNativeStyleProperties(_createForOfIteratorHelperLoose);
const result9 = require("AccessibilityAnnouncer").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx");

export default getEmbedThemeColors;
export const useEmbedThemeColors = function useEmbedThemeColors(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => outer1_5(closure_0), items);
};
