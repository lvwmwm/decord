// Module ID: 1277
// Function ID: 14404
// Name: semanticColor
// Dependencies: []
// Exports: getThemedRippleConfig

// Module 1277 (semanticColor)
let closure_2 = importDefault(dependencyMap[0]);
let num = 24;
if (obj.isAndroid()) {
  num = 32;
}
const internal = importDefault(dependencyMap[2]).internal;
const semanticColor = internal.resolveSemanticColor(importDefault(dependencyMap[2]).themes.DARK, importDefault(dependencyMap[2]).colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
const internal2 = importDefault(dependencyMap[2]).internal;
const semanticColor1 = internal2.resolveSemanticColor(importDefault(dependencyMap[2]).themes.LIGHT, importDefault(dependencyMap[2]).colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
const obj = arg1(dependencyMap[1]);
const systemVersionMajor = arg1(dependencyMap[3]).getSystemVersionMajor();
const frozen = Object.freeze({ foreground: true });
let closure_6 = Object.freeze({});
const map = new Map();
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/void/Form/native/FormConstants.tsx");

export const FORM_ROW_VERTICAL_PADDING = num;
export const RIPPLE_DARK_COLOR = semanticColor;
export const RIPPLE_LIGHT_COLOR = semanticColor1;
export const ANDROID_FOREGROUND_RIPPLE = frozen;
export const TitleStyleType = { DEFAULT: "default", ANDROID_NO_BORDER: "no_border", NO_BORDER_OR_MARGIN: "no_border_or_margin" };
export const getThemedRippleConfig = function getThemedRippleConfig(arg0) {
  let borderless;
  let color;
  let cornerRadius;
  let foreground;
  let radius;
  ({ radius, cornerRadius, color } = arg0);
  ({ foreground, borderless } = arg0);
  let obj = arg1(dependencyMap[1]);
  if (obj.isAndroid()) {
    if (null != color) {
      const sum = "" + color.toString() + cornerRadius + radius + tmp3;
      const value = map.get(sum);
      if (null != value) {
        return value;
      } else {
        const _Object = Object;
        obj = { color, radius, borderless, cornerRadius, foreground: tmp3 };
        const frozen = Object.freeze(obj);
        const result = map.set(sum, frozen);
        return frozen;
      }
    } else {
      arg1(dependencyMap[4]).isThemeLight(theme.theme) ? semanticColor1 : semanticColor;
      const obj2 = arg1(dependencyMap[4]);
    }
  } else {
    return closure_6;
  }
};
