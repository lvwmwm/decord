// Module ID: 1239
// Function ID: 1240
// Name: ClientThemesUtils
// Dependencies: [1240, 1195, 1083, 5021, 574, 2]
// Exports: areThemesEqualForGradientThemes, getBaseTheme, getCustomThemeBaseTheme, getLinearGradientForBackgroundGradient, getThemeForColor, getThemeName, hasCustomTheme, resolveThemeWithCustomSettings

// Module 1239 (ClientThemesUtils)
import shims from "shims" /* 574 */;
import Constants from "Constants" /* 1083 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1240 */;
import shared from "shared" /* 5021 */;
import size from "module_2" /* 2 */;

let closure_2 = ClientThemesConstants.REFRESH_STANDARD_BACKGROUND_THEMES;
let closure_3 = ThemeConstants.PROTO_THEME_MAP_WEB_REFRESH;
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("modules/client_themes/ClientThemesUtils.tsx");

export function getThemeForColor(l) {
  let LIGHT;
  if (l.l <= 0.3) {
    LIGHT = ThemeTypes.DARK;
  } else {
    LIGHT = ThemeTypes.LIGHT;
  }
  return LIGHT;
}
export function getCustomThemeBaseTheme(theme) {
  const obj = shared;
  return obj.isThemeDark(theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
}
export function hasCustomTheme(colors) {
  return null != colors && colors.colors.length > 0;
}
export function resolveThemeWithCustomSettings(theme, customUserThemeSettings) {
  let tmp2 = theme;
  const tmp = null != customUserThemeSettings && customUserThemeSettings.colors.length > 0;
  if (tmp) {
    const obj = shared;
    tmp2 = obj.isThemeDark(theme) ? tmp5.DARK : tmp5.LIGHT;
  }
  return tmp2;
}
export function getLinearGradientForBackgroundGradient(gradientPreset) {
  let angle;
  let colors;
  ({ angle, colors } = gradientPreset);
  const mapped = colors.map((item) => {
    let stop;
    let token;
    ({ token, stop } = item);
    const obj = shims;
    return "" + obj.unsafe_getResolvedRawColor(token, { saturation: 1 }) + " " + stop + "%";
  });
  return "linear-gradient(" + angle + "deg, " + mapped.join(", ") + ")";
}
export function areThemesEqualForGradientThemes(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = arg0 === ThemeTypes.ASH && arg1 === tmp2.DARK;
    if (!tmp3) {
      tmp3 = arg0 === ThemeTypes.DARK && arg1 === ThemeTypes.ASH;
    }
    tmp = tmp3;
  }
  return tmp;
}
export function getBaseTheme(arg0) {
  const tmp = closure_3[arg0];
  const obj = shared;
  return obj.isThemeDark(tmp) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
}
export function getThemeName(ASH) {
  let closure_0 = ASH;
  const found = closure_2.find((theme) => theme.theme === closure_0);
  let str;
  if (found != null) {
    str = found.getName();
  }
  if (str == null) {
    str = "";
  }
  return str;
}
