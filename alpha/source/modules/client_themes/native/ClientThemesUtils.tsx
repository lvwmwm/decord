// Module ID: 5192
// Function ID: 5193
// Name: client_themes/ClientThemesUtils
// Dependencies: [32, 19, 1192, 5038, 1238, 575, 671, 5193, 5011, 5012, 1241, 5021, 5194, 5253, 5250, 2]
// Exports: colorToHex, getClientThemesGradientColorByPercentage, getClientThemesGradientHexColors, getEmbedBackground, getEmbedScrollGradientBackground, getGradientAngle, getGradientHexColors, getGradientThemeMetadata, getGradientValue, getPresetOverlayOpacity, isCustomThemeActive, useGradientValue

// Module 5192 (client_themes/ClientThemesUtils)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1241 */;
import utils_ColorDefault from "utils/Color" /* 5012 */;
import shared from "shared" /* 5021 */;
import OverlayOpacityMultiplier from "OverlayOpacityMultiplier" /* 5193 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5194 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5250 */;
import useThemeDefault from "useTheme" /* 5253 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5038 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let tmp;
const ColorUtils = tmp(5011);
const f87052 = (stop) => stop.stop;
const f87053 = (item) => nativeDefault.unsafe_rawColors[item.token];
function getGradientColorByPercentage(type, MID) {
  let colors;
  let colors2;
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    ({ colors, colors: colors2 } = type);
    const mapped = colors.map(f87053);
    const mapped1 = colors2.map(f87052);
    const obj6 = _modDef671;
    const scaleResult = obj6.scale(mapped);
    const obj8 = scaleResult.domain(mapped1)(MID);
    obj2 = { r: null, g: null, b: null };
    [obj9.r, obj9.g, obj9.b] = obj8.rgb();
    _slicedToArray(obj8.rgb(), 3);
    return obj2;
  } else {
    const colors1 = type.customThemeSettings.colors;
    if (1 === colors1.length) {
      const tmpResult = ColorUtils;
      return tmpResult.hexToRgb(colors1[0]);
    } else {
      const mapped2 = colors1.map((item, index) => index / (colors1.length - 1) * 100);
      const obj = _modDef671;
      const scaleResult1 = obj.scale(colors1);
      obj3 = scaleResult1.domain(mapped2)(MID);
      const obj5 = { r: null, g: null, b: null };
      [obj4.r, obj4.g, obj4.b] = obj3.rgb();
      _slicedToArray(obj3.rgb(), 3);
      return obj5;
    }
  }
}
function getBottomColorWithOpacity(type, hexToRgbResult, gradientShare) {
  let START;
  let gradientAngle;
  const tmp = getGradientColorByPercentage;
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  if (gradientAngle > c8) {
    START = obj3.END;
  } else {
    START = obj3.START;
  }
  const tmpResult = tmp(type, START);
  const mixColors = tmp2(5011).mixColors;
  ColorUtils;
  const tmp8 = new utils_ColorDefault(tmpResult.r, tmpResult.g, tmpResult.b, gradientShare);
  const tmp9 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - gradientShare);
  const color = mixColors(tmp8, tmp9);
  const obj = _modDef671;
  const rgbResult = obj.rgb(color.red, color.green, color.blue);
  return rgbResult.hex("rgb");
}
function getTopColorWithOpacity(type, hexToRgbResult, gradientShare) {
  let END;
  let gradientAngle;
  const tmp = getGradientColorByPercentage;
  if (type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  if (gradientAngle > c8) {
    END = obj3.START;
  } else {
    END = obj3.END;
  }
  const tmpResult = tmp(type, END);
  const mixColors = tmp2(5011).mixColors;
  ColorUtils;
  const tmp8 = new utils_ColorDefault(tmpResult.r, tmpResult.g, tmpResult.b, gradientShare);
  const tmp9 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - gradientShare);
  const color = mixColors(tmp8, tmp9);
  const obj = _modDef671;
  const rgbResult = obj.rgb(color.red, color.green, color.blue);
  return rgbResult.hex("rgb");
}
function getGradientShare(gradientPreset, theme, arg2) {
  let tmp = arg2;
  if (gradientPreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    if (tmp == null) {
      let sum;
      const result = 0.2 * tmp9;
      const tmp2Result = shared;
      if (tmp2Result.isThemeDark(theme)) {
        sum = 0.12 + result;
      } else {
        sum = 0.3 + result;
      }
      tmp = sum;
    }
    return tmp;
  } else {
    let diff1 = tmp;
    if (tmp == null) {
      const tmp2Result3 = shared;
      diff1 = tmp2Result3.isThemeDark(theme) ? tmp4.LEVEL_2 : tmp4.LEVEL_4;
    }
    const diff = 1 - diff1;
    const _Math = Math;
    const _Math2 = Math;
    const tmp2Result4 = OverlayOpacityMultiplier;
    const maxResult = max(0, min(1, diff * tmp2Result4.normalizeOverlayOpacityMultiplier(gradientPreset)));
    if (maxResult !== diff) {
      diff1 = 1 - maxResult;
    }
    return diff1;
  }
}
function calculateGradientValueWithOpacity(customBackgroundGradient, END, theme, arg3) {
  let MID;
  let gradientAngle;
  let hexResult;
  let hexToRgbResult;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const hexToRgb = ColorUtils.hexToRgb;
  ColorUtils;
  if (isThemeDarkResult) {
    hexToRgbResult = hexToRgb(tmp5.DARK);
  } else {
    hexToRgbResult = hexToRgb(tmp5.LIGHT);
  }
  if (customBackgroundGradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let MID2 = customBackgroundGradient.midpointPercentage;
    if (MID2 == null) {
      MID2 = obj3.MID;
    }
    MID = MID2;
  } else {
    MID = obj3.MID;
  }
  let tmp10 = END;
  if (END == null) {
    tmp10 = MID;
  }
  const tmp11 = getGradientShare(customBackgroundGradient, theme, arg3);
  if (customBackgroundGradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    gradientAngle = customBackgroundGradient.angle;
  } else {
    gradientAngle = customBackgroundGradient.customThemeSettings.gradientAngle;
  }
  if (tmp10 === obj3.START) {
    let tmp20;
    if (gradientAngle < c8) {
      tmp20 = getBottomColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp11);
    } else {
      tmp20 = getTopColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp11);
    }
    hexResult = tmp20;
  } else if (tmp10 === tmp12.END) {
    let tmp15;
    if (gradientAngle > c8) {
      tmp15 = getBottomColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp11);
    } else {
      tmp15 = getTopColorWithOpacity(customBackgroundGradient, hexToRgbResult, tmp11);
    }
    hexResult = tmp15;
  } else {
    const tmp23 = getGradientColorByPercentage(customBackgroundGradient, tmp10);
    const mixColors = ColorUtils.mixColors;
    const self = this;
    const self2 = this;
    ColorUtils;
    const self3 = this;
    const self4 = this;
    const tmp27 = new utils_ColorDefault(tmp23.r, tmp23.g, tmp23.b, tmp11);
    const tmp28 = new utils_ColorDefault(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - tmp11);
    const color = mixColors(tmp27, tmp28);
    obj2 = _modDef671;
    const rgbResult = obj2.rgb(color.red, color.green, color.blue);
    hexResult = rgbResult.hex("rgb");
  }
  return hexResult;
}
let c8 = 128;
const OverlayOpacity = { LEVEL_9: 0.9, [0.9]: "LEVEL_9", LEVEL_85: 0.85, [0.85]: "LEVEL_85", LEVEL_8: 0.8, [0.8]: "LEVEL_8", LEVEL_75: 0.75, [0.75]: "LEVEL_75", LEVEL_7: 0.7, [0.7]: "LEVEL_7", LEVEL_6: 0.6, [0.6]: "LEVEL_6", LEVEL_5: 0.5, [0.5]: "LEVEL_5", LEVEL_4: 0.4, [0.4]: "LEVEL_4", LEVEL_35: 0.35, [0.35]: "LEVEL_35", LEVEL_3: 0.3, [0.3]: "LEVEL_3", LEVEL_25: 0.25, [0.25]: "LEVEL_25", LEVEL_2: 0.2, [0.2]: "LEVEL_2", LEVEL_15: 0.15, [0.15]: "LEVEL_15", LEVEL_1: 0.1, [0.1]: "LEVEL_1" };
let obj2 = { DARK: nativeDefault.unsafe_rawColors.BLACK, LIGHT: nativeDefault.unsafe_rawColors.WHITE };
let obj3 = { START: 0, [0]: "START", MID: 50, [50]: "MID", END: 100, [100]: "END" };
let result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesUtils.tsx");

export const GRADIENT_ANGLE_BREAKPOINT = 128;
export { OverlayOpacity };
export const OverlayColors = obj2;
export const GradientPercentage = obj3;
export function colorToHex(red) {
  const obj = _modDef671;
  const rgbResult = obj.rgb(red.red, red.green, red.blue);
  return rgbResult.hex("rgb");
}
export function getPresetOverlayOpacity(gradientPreset, alpha) {
  const obj = OverlayOpacityMultiplier;
  return max(0, min(1, alpha * obj.normalizeOverlayOpacityMultiplier(gradientPreset)));
}
export function getClientThemesGradientColorByPercentage(arg0, arg1) {
  let colors;
  let colors2;
  ({ colors, colors: colors2 } = arg0);
  const mapped = colors.map(f87053);
  const mapped1 = colors2.map(f87052);
  const obj = _modDef671;
  const scaleResult = obj.scale(mapped);
  obj3 = scaleResult.domain(mapped1)(arg1);
  const tmp3 = _slicedToArray(obj3.rgb(), 3);
  return { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
}
export function getClientThemesGradientHexColors(colors) {
  colors = colors.colors;
  return colors.map(f87053);
}
export function getGradientHexColors(gradientPreset) {
  let colors;
  if (gradientPreset.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    const colors1 = gradientPreset.colors;
    colors = colors1.map(f87053);
  } else {
    colors = gradientPreset.customThemeSettings.colors;
  }
  return colors;
}
export function getGradientAngle(gradientPreset) {
  let gradientAngle;
  if (gradientPreset.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    gradientAngle = gradientPreset.angle;
  } else {
    gradientAngle = gradientPreset.customThemeSettings.gradientAngle;
  }
  return gradientAngle;
}
export function getGradientThemeMetadata(gradientThemeFromFlags, gradient) {
  if (null != gradientThemeFromFlags) {
    if (null != gradient) {
      let gradientAngle;
      let mapped;
      const tmp15 = calculateGradientValueWithOpacity(gradient, obj3.START, gradient.theme);
      const tmp16 = calculateGradientValueWithOpacity(gradient, obj3.MID, gradient.theme);
      const tmp17 = calculateGradientValueWithOpacity(gradient, obj3.END, gradient.theme);
      if (gradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        gradientAngle = gradient.angle;
      } else {
        gradientAngle = gradient.customThemeSettings.gradientAngle;
      }
      const tmp2 = c8;
      if (gradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const colors = gradient.colors;
        mapped = colors.map(f87053);
      } else {
        mapped = gradient.customThemeSettings.colors;
      }
      let first = mapped[0];
      if (gradient.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const colors1 = gradient.customThemeSettings.colors;
        const mapped1 = colors1.map((item) => {
          const obj = _modDef671(item);
          return obj.luminance();
        });
        const _Math = Math;
        const items = [];
        const indexOf = mapped1.indexOf;
        const tmp21 = _modDef671;
        HermesBuiltin.arraySpread(items, mapped1, 0);
        const _Math2 = Math;
        const tmp21Result = tmp21(colors1[indexOf(mapped1, HermesBuiltin.apply(tmp, min, items, Math))]);
        const result = tmp21Result.set("hsl.s", 0.2);
        const result1 = result.set("hsl.l", 0.7);
        let hexResult = result1.hex();
        const _Math3 = Math;
        const items1 = [];
        const indexOf2 = mapped1.indexOf;
        const tmp28 = _modDef671;
        HermesBuiltin.arraySpread(items1, mapped1, 0);
        const _Math4 = Math;
        const tmp28Result = tmp28(colors1[indexOf2(mapped1, HermesBuiltin.apply(tmp, max, items1, Math))]);
        const result2 = tmp28Result.set("hsl.s", 0.2);
        const result3 = result2.set("hsl.l", 0.9);
        const hexResult1 = result3.hex();
        let tmp7 = hexResult1;
        if ("dark" === gradientThemeFromFlags) {
          tmp7 = hexResult;
        }
        if ("dark" === gradientThemeFromFlags) {
          hexResult = hexResult1;
        }
        first = tmp7;
      }
      let num2 = 1;
      if (gradient.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const tmp18Result = OverlayOpacityMultiplier;
        num2 = tmp18Result.normalizeOverlayOpacityMultiplier(gradient);
      }
      let obj = { theme: gradientThemeFromFlags, colors: obj4 };
      if (1 !== num2) {
        obj3 = { unsupported_overlayOpacityMultiplier: num2 };
        obj2 = { unsupported_overlayOpacityMultiplier: num2 };
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
      return obj;
    }
  }
  return null;
}
export { getGradientShare };
export function getGradientValue(theme, END) {
  return calculateGradientValueWithOpacity(theme, END, theme.theme);
}
export function useGradientValue(END, arg1) {
  let closure_1;
  let closure_2;
  let closure_0 = END;
  importDefault = arg1;
  const tmp = useColorThemeBackgroundDefault();
  dependencyMap = tmp;
  const tmp2 = useThemeDefault();
  let closure_3 = tmp2;
  const items = [tmp, , , , ];
  let dark;
  const useMemo = react.useMemo;
  if (arg1 != null) {
    dark = arg1.dark;
  }
  items[1] = dark;
  let light;
  if (arg1 != null) {
    light = arg1.light;
  }
  items[2] = light;
  items[3] = END;
  items[4] = tmp2;
  return useMemo(() => {
    if (null == closure_2) {
      return null;
    } else {
      let light;
      let dark;
      if (closure_1 != null) {
        dark = tmp20.dark;
      }
      if (null == dark) {
        let light1;
        if (closure_1 != null) {
          light1 = tmp20.light;
        }
        if (null == light1) {
          return calculateGradientValueWithOpacity(closure_2, END, closure_3);
        }
      }
      const obj = shared;
      const tmp11 = obj.isThemeDark(closure_3) ? obj.LEVEL_2 : obj.LEVEL_4;
      const tmp7Result = shared;
      if (tmp7Result.isThemeDark(closure_3)) {
        let dark1;
        if (closure_1 != null) {
          dark1 = tmp20.dark;
        }
        light = dark1;
      } else if (closure_1 != null) {
        light = tmp20.light;
      }
      const tmp14 = calculateGradientValueWithOpacity;
      if (light == null) {
        light = tmp11;
      }
      return tmp14(closure_2, END, closure_3, light);
    }
  }, items);
}
export function isCustomThemeActive() {
  const obj = MobileThemesUtils;
  const tmp = null != obj.getCustomBackgroundGradient() || null != ClientThemesBackgroundStore.gradientPreset;
  return tmp;
}
export function getEmbedScrollGradientBackground() {
  const obj = MobileThemesUtils;
  let customBackgroundGradient = obj.getCustomBackgroundGradient();
  if (customBackgroundGradient == null) {
    customBackgroundGradient = ClientThemesBackgroundStore.gradientPreset;
  }
  if (customBackgroundGradient == null) {
    customBackgroundGradient = null;
  }
  let tmp3 = null;
  if (null != customBackgroundGradient) {
    tmp3 = calculateGradientValueWithOpacity(customBackgroundGradient, undefined, customBackgroundGradient.theme);
  }
  return tmp3;
}
export function getEmbedBackground() {
  if (null == ClientThemesBackgroundStore.gradientPreset) {
    if (!CustomThemeMobileStore.hasCustomTheme()) {
      return null;
    }
  }
  const obj = shared;
  const tmp4 = obj.isThemeDark(ThemeStore.theme) ? obj2.DARK : obj2.LIGHT;
  const tmpResult = ColorUtils;
  return tmpResult.hexWithOpacity(tmp4, obj.LEVEL_1);
}
