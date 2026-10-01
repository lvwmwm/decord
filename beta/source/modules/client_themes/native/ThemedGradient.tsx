// Module ID: 5437
// Function ID: 5438
// Name: ThemedGradient
// Dependencies: [19, 17, 4653, 21, 4836, 4685, 4684, 4683, 1479, 5293, 4767, 576, 4689, 4652, 672, 1231, 563, 4691, 4766, 1230, 2]
// Exports: CustomThemedGradient, default, validateColors

// Module 5437 (ThemedGradient)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1230 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import utils_ColorDefault from "utils/Color" /* 4684 */;
import shared from "shared" /* 4685 */;
import GuildThemePresets from "GuildThemePresets" /* 4689 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 4691 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 4766 */;
import useThemeDefault from "useTheme" /* 4767 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4653 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let hex;

let metroImportDefault;
let metroRequire;
function getMixedGradientColor(mixColorOverride) {
  let b;
  let darkFallbackAmount;
  let darkFallbackOpacity;
  let g;
  let mixAmount;
  let r;
  let theme;
  let theme2;
  let theme3;
  ({ mixAmount, theme } = mixColorOverride);
  const obj = { mixAmount, mixColorOverride: mixColorOverride.mixColorOverride, theme };
  let mixAmount1 = obj.mixAmount;
  const color = mixColorOverride.color;
  if (mixAmount1 === undefined) {
    mixAmount1 = {};
  }
  ({ mixColorOverride, darkFallbackOpacity, theme: theme2 } = obj);
  if (darkFallbackOpacity === undefined) {
    darkFallbackOpacity = 0.7;
  }
  let num = obj.lightFallbackOpacity;
  if (num === undefined) {
    num = 0.8;
  }
  if (null == mixColorOverride) {
    const obj3 = shared;
    const isThemeDarkResult = obj3.isThemeDark(theme2);
    if (isThemeDarkResult) {
      num = darkFallbackOpacity;
    }
    let tmp4 = isThemeDarkResult ? mixAmount1.dark : mixAmount1.light;
    if (tmp4 == null) {
      tmp4 = num;
    }
    let num2 = 255;
    if (isThemeDarkResult) {
      num2 = 0;
    }
    const self = this;
    const self2 = this;
    mixColorOverride = new utils_ColorDefault(num2, num2, num2, tmp4);
  }
  const obj2 = { mixAmount, theme };
  let mixAmount2 = obj2.mixAmount;
  if (mixAmount2 === undefined) {
    mixAmount2 = {};
  }
  ({ darkFallbackAmount, theme: theme3 } = obj2);
  if (darkFallbackAmount === undefined) {
    darkFallbackAmount = 0.3;
  }
  let num3 = obj2.lightFallbackAmount;
  if (num3 === undefined) {
    num3 = 0.2;
  }
  const obj6 = shared;
  if (obj6.isThemeDark(theme3)) {
    if (null != mixAmount2.dark) {
      darkFallbackAmount = 1 - mixAmount2.dark;
    }
    num3 = darkFallbackAmount;
  } else if (null != mixAmount2.light) {
    num3 = 1 - mixAmount2.light;
  }
  const tmp10Result = ColorUtils;
  ({ r, g, b } = tmp10Result.hexToRgb(color));
  tmp10Result.hexToRgb(color);
  const mixColors = ColorUtils.mixColors;
  ColorUtils;
  const tmp14 = new utils_ColorDefault(r, g, b, num3);
  const mixColorsResult = mixColors(mixColorOverride, tmp14);
  return mixColorsResult.toHexString();
}
function GradientBase(angleCenter) {
  let absolute;
  let angle;
  let colors;
  let height;
  let items;
  let locations;
  let tall;
  let wide;
  let width;
  angleCenter = angleCenter.angleCenter;
  ({ colors, locations, angle } = angleCenter);
  if (angleCenter === undefined) {
    angleCenter = closure_9;
  }
  ({ absolute, wide, tall } = angleCenter);
  const componentStyles = angleCenter.componentStyles;
  const tmp = closure_8();
  ({ width, height } = useWindowDimensionsDefault());
  const obj = { colors, locations, angle, angleCenter, useAngle: true, style: items };
  useWindowDimensionsDefault();
  const tmp3 = metroRequire;
  const tmp4 = LinearGradientDefault;
  if (wide) {
    wide = { width };
    const obj2 = { width };
  }
  items = [wide, , , , ];
  if (tall) {
    tall = { height };
    const obj3 = { height };
  }
  items[1] = tall;
  items[2] = tmp.linearGradient;
  if (absolute) {
    absolute = tmp.absolute;
  }
  items[3] = absolute;
  items[4] = componentStyles;
  return tmp3(tmp4, obj);
}
class Gradient {
  constructor(mixColorOverride) {
    let absolute;
    let angleOverride;
    let colors1;
    let componentStyles;
    let gradient;
    let mixAmount;
    let tall;
    let wide;
    ({ gradient, angleOverride, mix: require, mixAmount } = mixColorOverride);
    ({ absolute, wide, tall, componentStyles } = mixColorOverride);
    if (mixAmount === undefined) {
      mixAmount = {};
    }
    mixColorOverride = mixColorOverride.mixColorOverride;
    const theme = mixAmount(mixColorOverride[10])();
    const colors = gradient.colors;
    let obj = {
      colors: colors.map((item) => {
        let tmp4;
        const tmp = require;
        if (tmp) {
          const obj = { color: nativeDefault.unsafe_rawColors[item.token], mixAmount, mixColorOverride, theme };
          tmp4 = getMixedGradientColor(obj);
        } else {
          tmp4 = nativeDefault.unsafe_rawColors[item.token];
        }
        return tmp4;
      }),
      locations: colors1.map((stop) => stop.stop / 100),
      angle: angleOverride,
      angleCenter,
      absolute,
      wide,
      tall,
      componentStyles
    };
    colors1 = gradient.colors;
    let tmp = closure_6;
    const tmp2 = GradientBase;
    if (angleOverride == null) {
      angleOverride = gradient.angle;
    }
    angleCenter = gradient.angleCenter;
    if (angleCenter == null) {
      angleCenter = closure_9;
    }
    return tmp(tmp2, obj);
  }
}
function GuildThemePresetGradient(mixColorOverride) {
  let absolute;
  let angleOverride;
  let colors1;
  let componentStyles;
  let mixAmount;
  let preset;
  let tall;
  let wide;
  ({ angleOverride, mix: require, mixAmount } = mixColorOverride);
  ({ preset, absolute, wide, tall, componentStyles } = mixColorOverride);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  mixColorOverride = mixColorOverride.mixColorOverride;
  let tmp = mixAmount(mixColorOverride[10])();
  const theme = tmp;
  let obj = require("GuildThemePresets");
  const guildThemePresetAppearance = obj.getGuildThemePresetAppearance(preset, tmp);
  const colors = guildThemePresetAppearance.colors;
  const obj2 = {
    colors: colors.map((hex) => {
      const tmp = require;
      if (tmp) {
        const obj = { color: hex.hex, mixAmount, mixColorOverride, theme };
        hex = getMixedGradientColor(obj);
      } else {
        hex = hex.hex;
      }
      return hex;
    }),
    locations: colors1.map((stop) => stop.stop / 100),
    angle: angleOverride,
    angleCenter,
    absolute,
    wide,
    tall,
    componentStyles
  };
  colors1 = guildThemePresetAppearance.colors;
  const tmp3 = closure_6;
  const tmp4 = GradientBase;
  if (angleOverride == null) {
    angleOverride = guildThemePresetAppearance.angle;
  }
  return tmp3(tmp4, obj2);
}
function CustomThemesGradient(arg0) {
  let absolute;
  let baseMix;
  let colors;
  let componentStyles;
  let gradientAngle;
  let gradientColorStops;
  let height;
  let items2;
  let mapped1;
  let mix;
  let mixAmount;
  let mixColorOverride;
  let regex;
  let tall;
  let theme;
  let wide;
  let width;
  ({ colors, gradientColorStops, absolute, wide, tall, mixAmount } = arg0);
  ({ baseMix, gradientAngle, mix } = arg0);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  let arr2;
  let reduced;
  ({ mixColorOverride, componentStyles, theme } = arg0);
  const tmp = closure_8();
  let tmp2 = reduced;
  mixAmount = undefined;
  mixColorOverride = undefined;
  theme = undefined;
  ({ width, height } = reduced(1479)());
  const tmp4 = reduced(1479)();
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  let mapped = colors;
  if (mix) {
    mapped = colors.map(function(item) {
      let b;
      let g;
      let r;
      let obj = mixAmount;
      let tmp2 = mixColorOverride;
      let num = closure_2_10;
      let obj2 = mixAmount;
      const result = baseMix / 100;
      if (mixAmount === undefined) {
        obj2 = {};
      }
      if (null == tmp2) {
        const diff = 1 - result;
        let sum = num + 0.2 * diff;
        const obj6 = arr2(dependencyMap[5]);
        const isThemeDarkResult = obj6.isThemeDark(theme);
        const tmp20 = dependencyMap;
        if (isThemeDarkResult) {
          sum = num + 0.25 * diff;
        }
        let tmp6 = isThemeDarkResult ? obj2.dark : obj2.light;
        if (tmp6 == null) {
          tmp6 = sum;
        }
        let num3 = 255;
        if (isThemeDarkResult) {
          num3 = 0;
        }
        const self = this;
        const self2 = this;
        tmp2 = new reduced(tmp20[6])(num3, num3, num3, tmp6);
      }
      if (mixAmount === undefined) {
        obj = {};
      }
      let num4 = num;
      if (num === undefined) {
        num4 = 0.3;
      }
      if (num === undefined) {
        num = 0.2;
      }
      const obj3 = arr2(dependencyMap[5]);
      if (obj3.isThemeDark(theme)) {
        if (null != obj.dark) {
          num4 = 1 - obj.dark;
        }
        num = num4;
      } else if (null != obj.light) {
        num = 1 - obj.light;
      }
      const tmp12Result = arr2(dependencyMap[7]);
      ({ r, g, b } = tmp12Result.hexToRgb(item));
      tmp12Result.hexToRgb(item);
      const mixColors = arr2(dependencyMap[7]).mixColors;
      arr2(dependencyMap[7]);
      const tmp16 = new reduced(dependencyMap[6])(r, g, b, num);
      const mixColorsResult = mixColors(tmp2, tmp16);
      const tmp12Result4 = arr2(dependencyMap[13]);
      return tmp12Result4.colorToHex(mixColorsResult);
    });
  }
  arr2 = mapped;
  if (1 === mapped.length) {
    const items = [mapped[0], mapped[0]];
    arr2 = items;
  }
  let result = (gradientAngle - 90) * Math.PI / 180;
  const cosResult = Math.cos(result);
  const sinResult = Math.sin(result);
  const point = { x: 0.6 - 0.7142857142857143 * cosResult, y: 0.5 - 0.7142857142857143 * sinResult };
  const point1 = { x: 0.6 + 0.7142857142857143 * cosResult, y: 0.5 + 0.7142857142857143 * sinResult };
  reduced = arr2.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr.push(item);
        return arr;
      }
    }
    try {
      const push = arr.push;
      const obj = reduced(dependencyMap[14])(item);
      push(obj.hex("rgb"));
    } catch (err) {
    }
    return arr;
  }, []);
  if (gradientColorStops === undefined) {
    gradientColorStops = [];
  }
  if (gradientColorStops.length === reduced.length) {
    mapped1 = gradientColorStops.map((item) => item / 100);
  } else if (1 === reduced.length) {
    mapped1 = [0, 1];
  } else {
    mapped1 = reduced.map((item, index) => index / (reduced.length - 1));
  }
  const items1 = [reduced, arr2];
  const effect = react.useEffect(function() {
    let obj2;
    if (reduced.length < 2) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const captureException = SentryUtilsDefault.captureException;
      SentryUtilsDefault;
      const error = new Error("Invalid custom theme gradient colors");
      const obj = { extra: obj2 };
      const _JSON = JSON;
      obj2 = { gradientColors: JSON.stringify(arr2) };
      captureException(error, obj);
    }
  }, items1);
  let tmp10Result = null;
  if (reduced.length >= 2) {
    let obj = { colors: reduced, locations: mapped1, start: point, end: point1, style: items2 };
    const tmp10 = closure_6;
    const tmp2Result = tmp2(5293);
    if (wide) {
      let obj2 = { width };
      wide = obj2;
    }
    items2 = [wide, , , , ];
    if (tall) {
      let obj3 = { height };
      tall = obj3;
    }
    items2[1] = tall;
    items2[2] = tmp.linearGradient;
    if (absolute) {
      absolute = tmp.absolute;
    }
    items2[3] = absolute;
    items2[4] = componentStyles;
    tmp10Result = tmp10(tmp2Result, obj);
  }
  return tmp10Result;
}
function ActiveGuildThemeGradient(arg0) {
  let GUILD_THEME_DEFAULT_BASE_MIX;
  let activeGuildTheme;
  let items;
  let num2;
  let theme;
  ({ activeGuildTheme, theme } = arg0);
  const merged = Object.assign(arg0, Object.assign({ activeGuildTheme: 0, theme: 0 }));
  if ("custom" === activeGuildTheme.type) {
    const customUserThemeSettings = activeGuildTheme.customUserThemeSettings;
    const first = customUserThemeSettings.colors[0];
    const obj2 = { colors: items, gradientColorStops: [], gradientAngle: num2, baseMix: GUILD_THEME_DEFAULT_BASE_MIX, theme };
    const merged1 = Object.assign(merged);
    items = [];
    const obj3 = GuildThemePresets;
    HermesBuiltin.arraySpread(items, obj3.getSingleColorGuildThemeGradientColors(first, theme), 0);
    num2 = customUserThemeSettings.gradientAngle;
    const tmp10 = CustomThemesGradient;
    const tmp14 = require;
    const tmp9 = metroRequire;
    if (num2 == null) {
      num2 = 0;
    }
    GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
    if (GUILD_THEME_DEFAULT_BASE_MIX == null) {
      GUILD_THEME_DEFAULT_BASE_MIX = tmp14(4689).GUILD_THEME_DEFAULT_BASE_MIX;
    }
    return tmp9(tmp10, obj2);
  } else {
    const obj = { preset: activeGuildTheme.preset };
    const merged2 = Object.assign(merged);
    return metroRequire(GuildThemePresetGradient, obj);
  }
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ softenGradient: { flex: 1 }, linearGradient: { flex: 1 }, absolute: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 } });
let angleCenter = { x: 0.5, y: 0.5 };
let c10 = 0.5;
const re15 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
let result = size.fileFinishedImporting("modules/client_themes/native/ThemedGradient.tsx");

export default function ThemedGradient(overlayOpacity) {
  let gradientPreset;
  let items1;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let tmp13;
  let tmp6Result10;
  let tmp6Result11;
  let tmp6Result12;
  let tmp6Result8;
  let tmp6Result9;
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const gradientOverride = overlayOpacity.gradientOverride;
  const merged = Object.assign(overlayOpacity, Object.assign({ overlayOpacity: 0, gradientOverride: 0 }));
  const tmp2 = closure_8();
  const tmp5 = useThemeDefault();
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(tmp5);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp8 = isThemeDarkResult ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
  const withOverlay = merged.withOverlay;
  const items = [ClientThemesBackgroundStore];
  const tmp9 = useThemeDefault();
  const tmp6Result = useStateFromStores;
  const preset = tmp6Result.useStateFromStoresObject(items, () => ({ preset: gradientPreset.gradientPreset })).preset;
  const tmp10 = useRoutedActiveGuildThemeDefault();
  const tmp6Result7 = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = tmp6Result7.useCustomThemeDisplaySettings();
  if (null != gradientOverride) {
    if (undefined !== customThemeDisplaySettings) {
      if (gradientOverride.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj2 = { theme: gradientOverride.theme };
        const merged1 = Object.assign(merged);
        const merged2 = Object.assign(gradientOverride.customThemeSettings);
        const tmp59 = metroRequire(CustomThemesGradient, obj2);
        let tmp60 = tmp59;
        const tmp52 = metroRequire;
        if (withOverlay) {
          const obj3 = { style: tmp2.absolute, children: items1 };
          items1 = [tmp59, ];
          const obj4 = { style: items2 };
          items2 = [tmp2.softenGradient, ];
          const obj5 = { backgroundColor: tmp6Result8.hexWithOpacity(tmp8, num) };
          items2[1] = obj5;
          tmp6Result8 = ColorUtils;
          items1[1] = tmp52(View, obj4);
          tmp60 = metroImportDefault(View, obj3);
        }
        return tmp60;
      }
    }
    if (gradientOverride.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const obj6 = { gradient: gradientOverride };
      const merged3 = Object.assign(merged);
      const tmp48 = metroRequire(Gradient, obj6);
      let tmp49 = tmp48;
      const tmp43 = metroRequire;
      if (withOverlay) {
        const obj7 = { style: tmp2.absolute, children: items3 };
        items3 = [tmp48, ];
        const obj8 = { style: items4 };
        items4 = [tmp2.softenGradient, ];
        const obj9 = { backgroundColor: tmp6Result9.hexWithOpacity(tmp8, num) };
        items4[1] = obj9;
        tmp6Result9 = ColorUtils;
        items3[1] = tmp43(View, obj8);
        tmp49 = metroImportDefault(View, obj7);
      }
      return tmp49;
    }
  }
  if (null != tmp10) {
    const obj10 = { activeGuildTheme: tmp10, theme: tmp9 };
    const merged4 = Object.assign(merged);
    const tmp39 = metroRequire(ActiveGuildThemeGradient, obj10);
    let tmp40 = tmp39;
    const tmp34 = metroRequire;
    if (withOverlay) {
      const obj11 = { style: tmp2.absolute, children: items5 };
      items5 = [tmp39, ];
      const obj12 = { style: items6 };
      items6 = [tmp2.softenGradient, ];
      const obj13 = { backgroundColor: tmp6Result10.hexWithOpacity(tmp8, num) };
      items6[1] = obj13;
      tmp6Result10 = ColorUtils;
      items5[1] = tmp34(View, obj12);
      tmp40 = metroImportDefault(View, obj11);
    }
    tmp13 = tmp40;
  } else {
    if (undefined !== customThemeDisplaySettings) {
      if (undefined !== customThemeDisplaySettings) {
        const obj14 = { theme: customThemeDisplaySettings.baseTheme };
        const merged5 = Object.assign(merged);
        const merged6 = Object.assign(customThemeDisplaySettings.customTheme);
        const tmp30 = metroRequire(CustomThemesGradient, obj14);
        let tmp31 = tmp30;
        const tmp23 = metroRequire;
        if (withOverlay) {
          const obj15 = { style: tmp2.absolute, children: items7 };
          items7 = [tmp30, ];
          const obj16 = { style: items8 };
          items8 = [tmp2.softenGradient, ];
          const obj17 = { backgroundColor: tmp6Result11.hexWithOpacity(tmp8, num) };
          items8[1] = obj17;
          tmp6Result11 = ColorUtils;
          items7[1] = tmp23(View, obj16);
          tmp31 = metroImportDefault(View, obj15);
        }
        tmp13 = tmp31;
      }
    }
    tmp13 = null;
    if (null != preset) {
      const obj18 = { gradient: preset };
      const merged7 = Object.assign(merged);
      const tmp19 = metroRequire(Gradient, obj18);
      let tmp20 = tmp19;
      const tmp14 = metroRequire;
      if (withOverlay) {
        const obj19 = { style: tmp2.absolute, children: items9 };
        items9 = [tmp19, ];
        const obj20 = { style: items10 };
        items10 = [tmp2.softenGradient, ];
        const obj21 = { backgroundColor: tmp6Result12.hexWithOpacity(tmp8, num) };
        items10[1] = obj21;
        tmp6Result12 = ColorUtils;
        items9[1] = tmp14(View, obj20);
        tmp20 = metroImportDefault(View, obj19);
      }
      tmp13 = tmp20;
    }
  }
  return tmp13;
};
export { Gradient };
export const validateColors = function validateColors(arr) {
  return arr.reduce((arr, item) => {
    if (typeof item === "string") {
      if (regex.test(item)) {
        arr.push(item);
        return arr;
      }
    }
    try {
      const push = arr.push;
      const obj = reduced(dependencyMap[14])(item);
      push(obj.hex("rgb"));
    } catch (err) {
    }
    return arr;
  }, []);
};
export const CustomThemedGradient = function CustomThemedGradient(overlayOpacity) {
  let items;
  let items1;
  let tmp5Result;
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const customTheme = overlayOpacity.customTheme;
  const merged = Object.assign(overlayOpacity, Object.assign({ overlayOpacity: 0, customTheme: 0 }));
  const tmp2 = closure_8();
  const tmp4 = useThemeDefault();
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(tmp4);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const obj2 = { theme: customTheme.theme };
  const tmp7 = isThemeDarkResult ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(customTheme.customThemeSettings);
  const tmp11 = metroRequire(CustomThemesGradient, obj2);
  let tmp12 = tmp11;
  const tmp8 = metroRequire;
  if (merged.withOverlay) {
    const obj3 = { style: tmp2.absolute, children: items };
    items = [tmp11, ];
    const obj4 = { style: items1 };
    items1 = [tmp2.softenGradient, ];
    const obj5 = { backgroundColor: tmp5Result.hexWithOpacity(tmp7, num) };
    items1[1] = obj5;
    tmp5Result = ColorUtils;
    items[1] = tmp8(View, obj4);
    tmp12 = metroImportDefault(View, obj3);
  }
  return tmp12;
};
