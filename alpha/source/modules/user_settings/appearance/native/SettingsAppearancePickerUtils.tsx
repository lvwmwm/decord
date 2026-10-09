// Module ID: 15509
// Function ID: 15510
// Name: SettingsAppearancePickerUtils
// Dependencies: [19, 1096, 4989, 1254, 4929, 4928, 587, 558, 576, 1243, 4779, 1126, 2]
// Exports: convertThemesToAnimatedThemes

// Module 15509 (SettingsAppearancePickerUtils)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl2 from "intl" /* 1126 */;
import getSystemThemeDefault from "getSystemTheme" /* 1243 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1254 */;
import useToken from "useToken" /* 4779 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import utils_ColorDefault from "utils/Color" /* 4929 */;
import MobileThemesUtils from "MobileThemesUtils" /* 4989 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getMaxColors() {
  const obj = MobileThemesUtils;
  const allMobileThemes = obj.getAllMobileThemes();
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
    } else if (tmp5(1254).ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
      let _Math2 = Math;
      num = Math.max(tmp3.colors.length, num);
    } else if (tmp5(1254).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
      let _Math = Math;
      num = Math.max(tmp3.customThemeSettings.colors.length, num);
    }
    continue;
  }
  return num;
}
function convertBackgroundGradientToAnimatedTheme(theme, prop, prop1) {
  let items;
  let num;
  let num2;
  let num4;
  let closure_1 = prop;
  let closure_2 = prop1;
  let obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: num, angle: num2, colors: items };
  num = theme.midpointPercentage;
  if (num == null) {
    num = 50;
  }
  num2 = theme.angle;
  if (num2 == null) {
    num2 = 0;
  }
  const colors = theme.colors;
  const mapped = colors.map(function(stop) {
    let b;
    let g;
    let mixColorsResult;
    let r;
    let tmp72;
    const tmp3 = nativeDefault.unsafe_rawColors[stop.token];
    const tmp7 = utils_ColorDefault;
    const self = this;
    if ("light" !== theme.theme) {
      tmp72 = new tmp7(0, 0, 0, tmp4);
    } else {
      tmp72 = new tmp7(255, 255, 255, tmp5);
    }
    const obj = ColorUtils;
    ({ r, g, b } = obj.hexToRgb(tmp3));
    let num8 = 0.2;
    obj.hexToRgb(tmp3);
    if ("light" !== theme.theme) {
      num8 = 0.3;
    }
    const obj2 = { hex: mixColorsResult.toHexString(), stop: stop.stop };
    const mixColors = tmp13(4928).mixColors;
    ColorUtils;
    const tmp16 = new utils_ColorDefault(r, g, b, num8);
    mixColorsResult = mixColors(tmp72, tmp16);
    return obj2;
  });
  let num3 = getMaxColors();
  if (num3 === undefined) {
    num3 = 5;
  }
  items = [];
  for (let num4 = 0; num4 < num3; num4 = num4 + 1) {
    let tmp = num4;
    if (num4 < mapped.length) {
      let arr = items.push(mapped[num4]);
    } else {
      let obj2 = { hex: mapped[mapped.length - 1].hex, stop: 100 };
      let arr2 = items.push(obj2);
    }
  }
  return obj;
}
function convertStandardThemeToAnimatedTheme(theme, items, BACKGROUND_SURFACE_HIGH) {
  let DARK;
  let items1;
  let num2;
  theme = theme.theme;
  if (ThemeTypes.LIGHT === theme) {
    DARK = tmp.LIGHT;
  } else if (ThemeTypes.ASH === theme) {
    DARK = tmp.ASH;
  } else if (ThemeTypes.DARK === theme) {
    DARK = tmp.DARK;
  } else {
    DARK = tmp.ONYX === theme ? tmp.ONYX : tmp.LIGHT;
  }
  const internal = nativeDefault.internal;
  const obj = { enabledExperiments: items };
  const semanticColor = internal.resolveSemanticColor(DARK, BACKGROUND_SURFACE_HIGH, obj);
  items = [{ hex: semanticColor, stop: 20 }, { hex: semanticColor, stop: 40 }, { hex: semanticColor, stop: 60 }, { hex: semanticColor, stop: 80 }, { hex: semanticColor, stop: 100 }];
  const obj2 = { theme: theme.theme, name: theme.getName(), midpointPercentage: 50, angle: 0, colors: items1 };
  let num = getMaxColors();
  if (num === undefined) {
    num = 5;
  }
  items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 < items.length) {
      let arr = items1.push(items[num2]);
    } else {
      let obj3 = { hex: items[items.length - 1].hex, stop: 100 };
      let arr2 = items1.push(obj3);
    }
  }
  return obj2;
}
function convertCustomBackgroundGradientToAnimatedTheme(theme, prop, prop1) {
  let items;
  let num;
  let num3;
  let closure_1 = prop;
  let closure_2 = prop1;
  let obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: 50, angle: num, colors: items };
  num = theme.customThemeSettings.gradientAngle;
  if (num == null) {
    num = 0;
  }
  const colors = theme.customThemeSettings.colors;
  const mapped = colors.map(function(item, index) {
    let b;
    let g;
    let mixColorsResult;
    let num9;
    let r;
    let tmp11;
    let tmp72;
    const tmp7 = utils_ColorDefault;
    const self = this;
    if ("light" !== theme.theme) {
      tmp72 = new tmp7(0, 0, 0, tmp2);
      tmp11 = tmp5;
    } else {
      tmp72 = new tmp7(255, 255, 255, tmp3);
      tmp11 = tmp5;
    }
    const obj = ColorUtils;
    ({ r, g, b } = obj.hexToRgb(item));
    let num8 = 0.2;
    obj.hexToRgb(item);
    if ("light" !== theme.theme) {
      num8 = 0.3;
    }
    const obj2 = { hex: mixColorsResult.toHexString(), stop: num9 };
    const mixColors = tmp15(4928).mixColors;
    ColorUtils;
    const tmp18 = new tmp11(4929)(r, g, b, num8);
    num9 = 0;
    mixColorsResult = mixColors(tmp72, tmp18);
    if (theme.customThemeSettings.colors.length > 1) {
      num9 = index * (100 / (tmp.customThemeSettings.colors.length - 1));
    }
    return obj2;
  });
  let num2 = getMaxColors();
  if (num2 === undefined) {
    num2 = 5;
  }
  items = [];
  for (let num3 = 0; num3 < num2; num3 = num3 + 1) {
    let tmp = num3;
    if (num3 < mapped.length) {
      let arr = items.push(mapped[num3]);
    } else {
      let obj2 = { hex: mapped[mapped.length - 1].hex, stop: 100 };
      let arr2 = items.push(obj2);
    }
  }
  return obj;
}
const ThemeTypes = Constants.ThemeTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLaunchWelcomeSystemTheme() {
  let first;
  let tmp10;
  let tmp15;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp6 = getSystemThemeDefault() === ThemeTypes.LIGHT ? ThemeTypes.LIGHT : ThemeTypes.DARK;
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, tmp6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t.zlvNOj);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== token) {
    let num5;
    const items = [{ hex: token, stop: 20 }, , , , ];
    const obj2 = { hex: token, stop: 20 };
    const obj3 = { hex: token, stop: 40 };
    items[1] = obj3;
    const obj4 = { hex: token, stop: 60 };
    items[2] = obj4;
    const obj5 = { hex: token, stop: 80 };
    items[3] = obj5;
    const obj6 = { hex: token, stop: 100 };
    items[4] = obj6;
    let num3 = getMaxColors();
    if (num3 === undefined) {
      num3 = 5;
    }
    const items1 = [];
    for (let num5 = 0; num5 < num3; num5 = num5 + 1) {
      if (num5 < items.length) {
        let arr = items1.push(items[num5]);
      } else {
        let obj7 = { hex: items[items.length - 1].hex, stop: 100 };
        let arr2 = items1.push(obj7);
      }
    }
    cResult[1] = token;
    cResult[2] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp10) {
    const obj8 = { theme: "system", name: first, midpointPercentage: 50, angle: 0, colors: tmp10 };
    cResult[3] = tmp10;
    cResult[4] = obj8;
    tmp15 = obj8;
  } else {
    tmp15 = cResult[4];
  }
  return tmp15;
}) : (function useLaunchWelcomeSystemTheme() {
  let token;
  let tmp = importDefault;
  const tmp4 = getSystemThemeDefault() === ThemeTypes.LIGHT ? ThemeTypes.LIGHT : ThemeTypes.DARK;
  let obj = token(4779);
  token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, tmp4);
  let items = [token];
  return react.useMemo(() => {
    let intl;
    let items1;
    let num2;
    const obj = { theme: "system", name: intl.string(intl2.t.zlvNOj), midpointPercentage: 50, angle: 0, colors: items1 };
    intl = intl2.intl;
    const items = [, , , , ];
    const obj2 = { hex: token, stop: 20 };
    items[0] = obj2;
    items[1] = { hex: token, stop: 40 };
    items[2] = { hex: token, stop: 60 };
    items[3] = { hex: token, stop: 80 };
    items[4] = { hex: token, stop: 100 };
    let num = getMaxColors();
    if (num === undefined) {
      num = 5;
    }
    items1 = [];
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      if (num2 < items.length) {
        let arr = items1.push(items[num2]);
      } else {
        let obj3 = { hex: items[items.length - 1].hex, stop: 100 };
        let arr2 = items1.push(obj3);
      }
    }
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearancePickerUtils.tsx");

export const convertThemesToAnimatedThemes = function convertThemesToAnimatedThemes(themes, prop, prop1, cResult, BACKGROUND_SURFACE_HIGH) {
  let num = prop;
  if (prop === undefined) {
    num = 0.7;
  }
  let num2 = prop1;
  if (prop1 === undefined) {
    num2 = 0.8;
  }
  let items = cResult;
  if (cResult === undefined) {
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
    } else if (tmp6(1254).ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
      let arr2 = items1.push(convertBackgroundGradientToAnimatedTheme(tmp5, num, num2));
    } else if (tmp6(1254).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
      let arr5 = items1.push(convertCustomBackgroundGradientToAnimatedTheme(tmp5, num, num2));
    }
    continue;
  }
  return items1;
};
export const useLaunchWelcomeSystemTheme = tmp2;
