// Module ID: 1277
// Function ID: 14406
// Name: semanticColor
// Dependencies: [1278, 477, 689, 4110, 3976, 2]
// Exports: getThemedRippleConfig

// Module 1277 (semanticColor)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import { internal } from "_createForOfIteratorHelperLoose";
import { internal as internal2 } from "_createForOfIteratorHelperLoose";
import getSystemVersion from "getSystemVersion";
import set from "_createForOfIteratorHelperLoose";

const require = arg1;
let num = 24;
if (set.isAndroid()) {
  num = 32;
}
const semanticColor = internal.resolveSemanticColor(require("_createForOfIteratorHelperLoose").themes.DARK, require("_createForOfIteratorHelperLoose").colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
const semanticColor1 = internal2.resolveSemanticColor(require("_createForOfIteratorHelperLoose").themes.LIGHT, require("_createForOfIteratorHelperLoose").colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
getSystemVersion = getSystemVersion.getSystemVersionMajor();
let frozen = Object.freeze({ foreground: true });
let closure_6 = Object.freeze({});
const map = new Map();
let result = set.fileFinishedImporting("design/void/Form/native/FormConstants.tsx");

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
  let obj = require(477) /* set */;
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
      require(3976) /* AccessibilityAnnouncer */.isThemeLight(theme.theme) ? semanticColor1 : semanticColor;
      const obj2 = require(3976) /* AccessibilityAnnouncer */;
    }
  } else {
    return closure_6;
  }
};
