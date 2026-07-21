// Module ID: 3971
// Function ID: 32896
// Name: getThemeForColor
// Dependencies: [2432696335, 33554447, 1929379840, 31, 3983]
// Exports: areThemesEqualForGradientThemes, getBaseTheme, getLinearGradientForBackgroundGradient, getThemeForColor, getThemeName

// Module 3971 (getThemeForColor)
import calculateFromWidth from "calculateFromWidth";

let PROTO_THEME_MAP_WEB_REFRESH;
const _module = require(dependencyMap[0]);
({ LEGACY_STANDARD_BACKGROUND_THEMES: closure_2, REFRESH_STANDARD_BACKGROUND_THEMES: closure_3 } = _module);
const _module1 = require(dependencyMap[1]);
({ PROTO_THEME_MAP_MOBILE: closure_4, PROTO_THEME_MAP_WEB_REFRESH } = _module1);
const ThemeTypes = require(dependencyMap[2]).ThemeTypes;
const result = calculateFromWidth.fileFinishedImporting("modules/client_themes/ClientThemesUtils.tsx");

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
    return "" + callback(closure_1[3]).unsafe_getResolvedRawColor(token, { saturation: 1 }) + " " + stop + "%";
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
  return closure_4[base_theme];
};
export const getThemeName = function getThemeName(DARK, closure_1) {
  const require = DARK;
  const found = closure_1 ? closure_3 : closure_2.find((theme) => theme.theme === theme);
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
