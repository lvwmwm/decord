// Module ID: 3973
// Function ID: 32903
// Name: getThemeForColor
// Dependencies: [3943, 1281, 482, 688, 2]
// Exports: areThemesEqualForGradientThemes, getBaseTheme, getLinearGradientForBackgroundGradient, getThemeForColor, getThemeName

// Module 3973 (getThemeForColor)
import items1 from "items1";
import SystemThemeState from "SystemThemeState";
import { ThemeTypes } from "sum";

let PROTO_THEME_MAP_WEB_REFRESH;
let closure_2;
let closure_3;
let closure_4;
({ LEGACY_STANDARD_BACKGROUND_THEMES: closure_2, REFRESH_STANDARD_BACKGROUND_THEMES: closure_3 } = items1);
({ PROTO_THEME_MAP_MOBILE: closure_4, PROTO_THEME_MAP_WEB_REFRESH } = SystemThemeState);
const result = require("sum").fileFinishedImporting("modules/client_themes/ClientThemesUtils.tsx");

export const getThemeForColor = function getThemeForColor(l) {
  if (l.l <= 0.3) {
    let LIGHT = ThemeTypes.DARK;
  } else {
    LIGHT = ThemeTypes.LIGHT;
  }
  return LIGHT;
};
export const getLinearGradientForBackgroundGradient = function getLinearGradientForBackgroundGradient(gradientPreset) {
  let angle;
  let colors;
  ({ angle, colors } = gradientPreset);
  const mapped = colors.map((arg0) => {
    let stop;
    let token;
    ({ token, stop } = arg0);
    return "" + outer1_0(outer1_1[3]).unsafe_getResolvedRawColor(token, { saturation: 1 }) + " " + stop + "%";
  });
  return "linear-gradient(" + angle + "deg, " + mapped.join(", ") + ")";
};
export const areThemesEqualForGradientThemes = function areThemesEqualForGradientThemes(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = arg0 === ThemeTypes.DARK;
    if (tmp3) {
      tmp3 = arg1 === ThemeTypes.DARKER;
    }
    if (!tmp3) {
      let tmp6 = arg0 === ThemeTypes.DARKER;
      if (tmp6) {
        tmp6 = arg1 === ThemeTypes.DARK;
      }
      tmp3 = tmp6;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const getBaseTheme = function getBaseTheme(base_theme) {
  return table[base_theme];
};
export const getThemeName = function getThemeName(DARK, closure_1) {
  let closure_0 = DARK;
  const found = closure_1 ? closure_3 : closure_2.find((theme) => theme.theme === closure_0);
  let name;
  if (null != found) {
    name = found.getName();
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  return str;
};
