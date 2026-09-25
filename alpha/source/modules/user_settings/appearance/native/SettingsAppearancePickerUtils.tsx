// Module ID: 14820
// Function ID: 14821
// Name: SettingsAppearancePickerUtils
// Dependencies: [19, 1085, 4760, 1230, 4681, 4680, 576, 1219, 4528, 1115, 2]
// Exports: convertThemesToAnimatedThemes, useLaunchWelcomeSystemTheme

// Module 14820 (SettingsAppearancePickerUtils)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import getSystemThemeDefault from "getSystemTheme" /* 1219 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1230 */;
import ColorUtils from "ColorUtils" /* 4680 */;
import utils_ColorDefault from "utils/Color" /* 4681 */;
import MobileThemesUtils from "MobileThemesUtils" /* 4760 */;
import noop from "module_19" /* 19 */;

require = fn;
function getMaxColors() {
  const allMobileThemes = MobileThemesUtils.getAllMobileThemes();
  let num = 0;
  const iter = allMobileThemes[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let type = nextResult.type;
    let tmp5 = require;
    if (ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME === type) {
      let _Math3 = Math;
      num = Math.max(1, num);
    } else if (tmp5(1230).ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
      let _Math2 = Math;
      num = Math.max(tmp3.colors.length, num);
    } else if (tmp5(1230).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
      let _Math = Math;
      num = Math.max(tmp3.customThemeSettings.colors.length, num);
    }
    continue;
  }
  return num;
}
function convertBackgroundGradientToAnimatedTheme(theme, prop, prop1) {
  closure_1 = prop;
  closure_2 = prop1;
  let obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: null, angle: null, colors: null };
  let num = theme.midpointPercentage;
  if (num == null) {
    num = 50;
  }
  obj.midpointPercentage = num;
  let num2 = theme.angle;
  if (num2 == null) {
    num2 = 0;
  }
  obj.angle = num2;
  const colors = theme.colors;
  const mapped = colors.map((stop) => {
    const tmp6 = utils_ColorDefault;
    if ("light" !== theme.theme) {
      let tmp62 = new tmp6(0, 0, 0, tmp3);
    } else {
      tmp62 = new tmp6(255, 255, 255, tmp4);
    }
    ({ r, g, b } = ColorUtils.hexToRgb(nativeDefault.unsafe_rawColors[stop.token]));
    let num8 = 0.2;
    if ("light" !== theme.theme) {
      num8 = 0.3;
    }
    const obj2 = { hex: null, stop: null };
    const hexToRgbResult = ColorUtils.hexToRgb(nativeDefault.unsafe_rawColors[stop.token]);
    const tmp13Result = ColorUtils;
    const tmp15 = new utils_ColorDefault(r, g, b, num8);
    obj2.hex = tmp13Result.mixColors(tmp62, new utils_ColorDefault(r, g, b, num8)).toHexString();
    obj2.stop = stop.stop;
    return obj2;
  });
  let num3 = getMaxColors();
  if (num3 === undefined) {
    num3 = 5;
  }
  const items = [];
  for (let num4 = 0; num4 < num3; num4 = num4 + 1) {
    if (num4 < mapped.length) {
      let arr = items.push(mapped[num4]);
    } else {
      let obj2 = { hex: mapped[mapped.length - 1].hex, stop: 100 };
      let arr2 = items.push(obj2);
    }
  }
  obj.colors = items;
  return obj;
}
function convertStandardThemeToAnimatedTheme(theme, items, BACKGROUND_SURFACE_HIGH) {
  theme = theme.theme;
  if (ThemeTypes.LIGHT === theme) {
    let DARK = tmp.LIGHT;
  } else if (tmp.ASH === theme) {
    DARK = tmp.ASH;
  } else if (tmp.DARK === theme) {
    DARK = tmp.DARK;
  } else {
    DARK = tmp.ONYX === theme ? tmp.ONYX : tmp.LIGHT;
  }
  const internal = nativeDefault.internal;
  const semanticColor = internal.resolveSemanticColor(DARK, BACKGROUND_SURFACE_HIGH, { enabledExperiments: items });
  const obj2 = { theme: theme.theme, name: theme.getName(), midpointPercentage: 50, angle: 0, colors: null };
  items = [{ hex: semanticColor, stop: 20 }, { hex: semanticColor, stop: 40 }, { hex: semanticColor, stop: 60 }, { hex: semanticColor, stop: 80 }, { hex: semanticColor, stop: 100 }];
  let num = getMaxColors();
  if (num === undefined) {
    num = 5;
  }
  const items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 < items.length) {
      let arr = items1.push(items[num2]);
    } else {
      let obj3 = { hex: items[items.length - 1].hex, stop: 100 };
      let arr2 = items1.push(obj3);
    }
  }
  obj2.colors = items1;
  return obj2;
}
function convertCustomBackgroundGradientToAnimatedTheme(theme, prop, prop1) {
  closure_1 = prop;
  closure_2 = prop1;
  let obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: 50, angle: null, colors: null };
  let num = theme.customThemeSettings.gradientAngle;
  if (num == null) {
    num = 0;
  }
  obj.angle = num;
  const colors = theme.customThemeSettings.colors;
  const mapped = colors.map((item, index) => {
    const tmp7 = utils_ColorDefault;
    if ("light" !== theme.theme) {
      let tmp72 = new tmp7(0, 0, 0, tmp2);
      let tmp12 = tmp5;
    } else {
      tmp72 = new tmp7(255, 255, 255, tmp3);
      tmp12 = tmp5;
    }
    ({ r, g, b } = ColorUtils.hexToRgb(item));
    let num8 = 0.2;
    if ("light" !== theme.theme) {
      num8 = 0.3;
    }
    const obj2 = { hex: null, stop: null };
    const hexToRgbResult = ColorUtils.hexToRgb(item);
    const tmp16Result = ColorUtils;
    const tmp18 = new tmp12(4681)(r, g, b, num8);
    obj2.hex = tmp16Result.mixColors(tmp72, new tmp12(4681)(r, g, b, num8)).toHexString();
    let num9 = 0;
    if (theme.customThemeSettings.colors.length > 1) {
      num9 = index * (100 / (tmp.customThemeSettings.colors.length - 1));
    }
    obj2.stop = num9;
    return obj2;
  });
  let num2 = getMaxColors();
  if (num2 === undefined) {
    num2 = 5;
  }
  const items = [];
  for (let num3 = 0; num3 < num2; num3 = num3 + 1) {
    if (num3 < mapped.length) {
      let arr = items.push(mapped[num3]);
    } else {
      let obj2 = { hex: mapped[mapped.length - 1].hex, stop: 100 };
      let arr2 = items.push(obj2);
    }
  }
  obj.colors = items;
  return obj;
}
const ThemeTypes = fn(1085).ThemeTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearancePickerUtils.tsx");

export const convertThemesToAnimatedThemes = function convertThemesToAnimatedThemes(themes, prop, prop1, memo, BACKGROUND_SURFACE_HIGH) {
  let num = prop;
  if (prop === undefined) {
    num = 0.7;
  }
  let num2 = prop1;
  if (prop1 === undefined) {
    num2 = 0.8;
  }
  let items = memo;
  if (memo === undefined) {
    items = [];
  }
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  const items1 = [];
  const iter = themes[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let type = nextResult.type;
    let tmp6 = require;
    if (ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME === type) {
      let arr = items1.push(convertStandardThemeToAnimatedTheme(tmp5, items, BACKGROUND_SURFACE_HIGH));
    } else if (tmp6(1230).ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
      let arr2 = items1.push(convertBackgroundGradientToAnimatedTheme(tmp5, num, num2));
    } else if (tmp6(1230).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
      let arr5 = items1.push(convertCustomBackgroundGradientToAnimatedTheme(tmp5, num, num2));
    }
    continue;
  }
  return items1;
};
export const useLaunchWelcomeSystemTheme = function useLaunchWelcomeSystemTheme() {
  const tmp4 = getSystemThemeDefault() === ThemeTypes.LIGHT ? ThemeTypes.LIGHT : ThemeTypes.DARK;
  token = token(4528).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, tmp4);
  let items = [token];
  return noop.useMemo(() => {
    const obj = { theme: "system", name: null, midpointPercentage: 50, angle: 0, colors: null };
    const intl = util.intl;
    obj.name = intl.string(util.t.zlvNOj);
    const items = [{ hex: token, stop: 20 }, { hex: token, stop: 40 }, { hex: token, stop: 60 }, { hex: token, stop: 80 }, { hex: token, stop: 100 }];
    let num = getMaxColors();
    if (num === undefined) {
      num = 5;
    }
    const items1 = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      if (num2 < items.length) {
        let arr = items1.push(items[num2]);
      } else {
        let obj3 = { hex: items[items.length - 1].hex, stop: 100 };
        let arr2 = items1.push(obj3);
      }
    }
    obj.colors = items1;
    return obj;
  }, items);
};
