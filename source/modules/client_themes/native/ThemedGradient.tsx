// Module ID: 4658
// Function ID: 40335
// Name: getThemeMixColor
// Dependencies: []
// Exports: CustomThemedGradient, default

// Module 4658 (getThemeMixColor)
function getThemeMixColor(mixAmount) {
  let darkFallbackOpacity;
  let mixColorOverride;
  let theme;
  mixAmount = mixAmount.mixAmount;
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  ({ mixColorOverride, darkFallbackOpacity, theme } = mixAmount);
  if (darkFallbackOpacity === undefined) {
    darkFallbackOpacity = 0.7;
  }
  let num = mixAmount.lightFallbackOpacity;
  if (num === undefined) {
    num = 0.8;
  }
  if (null != mixColorOverride) {
    return mixColorOverride;
  } else {
    const isThemeDarkResult = arg1(dependencyMap[5]).isThemeDark(theme);
    if (isThemeDarkResult) {
      num = darkFallbackOpacity;
    }
    const tmp = isThemeDarkResult ? mixAmount.dark : mixAmount.light;
    if (null != tmp) {
      num = tmp;
    }
    let num2 = 255;
    if (isThemeDarkResult) {
      num2 = 0;
    }
    let tmp4 = importDefault(dependencyMap[6]);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(num2, num2, num2, num);
    return tmp4;
  }
}
function getThemedMixAmount(mixAmount) {
  let darkFallbackAmount;
  let theme;
  mixAmount = mixAmount.mixAmount;
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  ({ darkFallbackAmount, theme } = mixAmount);
  if (darkFallbackAmount === undefined) {
    darkFallbackAmount = 0.3;
  }
  let num = mixAmount.lightFallbackAmount;
  if (num === undefined) {
    num = 0.2;
  }
  if (obj2.isThemeDark(theme)) {
    if (null != mixAmount.dark) {
      darkFallbackAmount = 1 - mixAmount.dark;
    }
    num = darkFallbackAmount;
  } else if (null != mixAmount.light) {
    num = 1 - mixAmount.light;
  }
  return num;
}
function getMixedGradientColor(mixColorOverride) {
  let b;
  let g;
  let mixAmount;
  let r;
  let theme;
  ({ mixAmount, theme } = mixColorOverride);
  const obj = { mixAmount, mixColorOverride: mixColorOverride.mixColorOverride, theme };
  const tmp = getThemeMixColor({ mixAmount, mixColorOverride: mixColorOverride.mixColorOverride, theme });
  const tmp2 = getThemedMixAmount({ mixAmount, theme });
  const obj2 = arg1(dependencyMap[7]);
  ({ r, g, b } = arg1(dependencyMap[7]).hexToRgb(mixColorOverride.color));
  const hexToRgbResult = arg1(dependencyMap[7]).hexToRgb(mixColorOverride.color);
  let tmp4 = importDefault(dependencyMap[6]);
  tmp4 = new tmp4(r, g, b, tmp2);
  const obj3 = arg1(dependencyMap[7]);
  return arg1(dependencyMap[7]).mixColors(tmp, tmp4).toHexString();
}
function GradientBase(angleCenter) {
  let absolute;
  let angle;
  let colors;
  let height;
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
  const tmp = callback3();
  ({ width, height } = importDefault(dependencyMap[8])());
  let obj = { colors, locations, angle, angleCenter, useAngle: true };
  const tmp2 = importDefault(dependencyMap[8])();
  const tmp3 = closure_6;
  if (wide) {
    obj = { width };
    wide = obj;
  }
  const items = [wide, , , , ];
  if (tall) {
    obj = { height };
    tall = obj;
  }
  items[1] = tall;
  items[2] = tmp.linearGradient;
  if (absolute) {
    absolute = tmp.absolute;
  }
  items[3] = absolute;
  items[4] = angleCenter.componentStyles;
  obj.style = items;
  return tmp3(importDefault(dependencyMap[9]), obj);
}
class Gradient {
  constructor(arg0) {
    ({ gradient, angleOverride, mix: closure_0, mixAmount } = global);
    ({ absolute, wide, tall, componentStyles } = global);
    if (mixAmount === undefined) {
      mixAmount = {};
    }
    importDefault = mixAmount;
    dependencyMap = global.mixColorOverride;
    closure_3 = undefined;
    closure_3 = importDefault(dependencyMap[10])();
    colors = gradient.colors;
    obj = {
      colors: colors.map((arg0) => {
            if (closure_0) {
              const obj = { color: mixAmount(mixColorOverride[11]).unsafe_rawColors[arg0.token], mixAmount, mixColorOverride, theme: closure_3 };
              let tmp3 = callback(obj);
            } else {
              tmp3 = mixAmount(mixColorOverride[11]).unsafe_rawColors[arg0.token];
            }
            return tmp3;
          }),
      locations: colors1.map((stop) => stop.stop / 100)
    };
    colors1 = gradient.colors;
    tmp = jsx;
    tmp2 = GradientBase;
    if (null == angleOverride) {
      angleOverride = gradient.angle;
    }
    obj.angle = angleOverride;
    angleCenter = gradient.angleCenter;
    if (null == angleCenter) {
      angleCenter = createStyles;
    }
    obj.angleCenter = angleCenter;
    obj.absolute = absolute;
    obj.wide = wide;
    obj.tall = tall;
    obj.componentStyles = componentStyles;
    return tmp(tmp2, obj);
  }
}
function GuildThemePresetGradient(mixColorOverride) {
  let absolute;
  let angleOverride;
  let componentStyles;
  let mixAmount;
  let preset;
  let tall;
  let wide;
  ({ angleOverride, mix: closure_0, mixAmount } = mixColorOverride);
  ({ preset, absolute, wide, tall, componentStyles } = mixColorOverride);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  const importDefault = mixAmount;
  const dependencyMap = mixColorOverride.mixColorOverride;
  let closure_3;
  const tmp = importDefault(dependencyMap[10])();
  closure_3 = tmp;
  let obj = arg1(dependencyMap[12]);
  const guildThemePresetAppearance = obj.getGuildThemePresetAppearance(preset, tmp);
  const colors = guildThemePresetAppearance.colors;
  obj = {
    colors: colors.map((hex) => {
      if (closure_0) {
        const obj = { color: hex.hex, mixAmount, mixColorOverride, theme: callback };
        hex = callback(obj);
      } else {
        hex = hex.hex;
      }
      return hex;
    }),
    locations: colors1.map((stop) => stop.stop / 100)
  };
  const colors1 = guildThemePresetAppearance.colors;
  if (null == angleOverride) {
    angleOverride = guildThemePresetAppearance.angle;
  }
  obj.angle = angleOverride;
  obj.angleCenter = closure_9;
  obj.absolute = absolute;
  obj.wide = wide;
  obj.tall = tall;
  obj.componentStyles = componentStyles;
  return closure_6(GradientBase, obj);
}
function validateColors(arr) {
  return arr.reduce((arr) => {
    if ("string" === typeof arg1) {
      if (regex.test(tmp)) {
        arr.push(arg1);
        return arr;
      }
    }
    arr.push(callback(closure_2[14])(arg1).hex("rgb"));
  }, []);
}
function CustomThemesGradient(arg0) {
  let absolute;
  let baseMix;
  let colors;
  let componentStyles;
  let end;
  let gradientAngle;
  let gradientColorStops;
  let height;
  let mix;
  let mixAmount;
  let mixColorOverride;
  let start;
  let tall;
  let theme;
  let wide;
  let width;
  ({ absolute, wide, tall, mixAmount } = arg0);
  ({ colors, baseMix, gradientAngle, gradientColorStops, mix } = arg0);
  if (mixAmount === undefined) {
    mixAmount = {};
  }
  let arg1;
  let importDefault;
  ({ mixColorOverride, componentStyles, theme } = arg0);
  const tmp = callback3();
  let obj = { colors, mix, mixAmount, mixColorOverride, theme, baseMix };
  ({ width, height } = importDefault(dependencyMap[8])());
  const tmp3 = function getGradientColorsForCustomThemesGradient(mix) {
    let colors;
    let mixAmount;
    ({ colors, baseMix: closure_0, mixAmount } = mix);
    if (mixAmount === undefined) {
      mixAmount = {};
    }
    ({ mixColorOverride: closure_2, theme: closure_3 } = mix);
    let mapped = colors;
    if (mix.mix) {
      mapped = colors.map((PRIMARY_800) => {
        let b;
        let g;
        let r;
        const diff = 1 - callback / 100;
        let obj = { mixAmount, mixColorOverride: closure_2, theme: closure_3, darkFallbackOpacity: closure_10 + 0.25 * diff, lightFallbackOpacity: closure_10 + 0.2 * diff };
        obj = { mixAmount, theme: closure_3, darkFallbackAmount: closure_10, lightFallbackAmount: closure_10 };
        const tmp2 = callback2(obj);
        const tmp3 = callback3(obj);
        const obj3 = callback(closure_2[7]);
        ({ r, g, b } = callback(closure_2[7]).hexToRgb(PRIMARY_800));
        const hexToRgbResult = callback(closure_2[7]).hexToRgb(PRIMARY_800);
        let tmp5 = mixAmount(closure_2[6]);
        tmp5 = new tmp5(r, g, b, tmp3);
        const obj4 = callback(closure_2[7]);
        const mixColorsResult = callback(closure_2[7]).mixColors(tmp2, tmp5);
        return callback(closure_2[13]).colorToHex(mixColorsResult);
      });
    }
    let tmp = mapped;
    if (1 === mapped.length) {
      const items = [mapped[0], mapped[0]];
      tmp = items;
    }
    return tmp;
  }(obj);
  arg1 = tmp3;
  const result = (gradientAngle - 90) * Math.PI / 180;
  const cosResult = Math.cos(result);
  const sinResult = Math.sin(result);
  obj = { start: obj, end: obj1 };
  obj = { x: 0.6 - 0.7142857142857143 * cosResult, y: 0.5 - 0.7142857142857143 * sinResult };
  ({ start, end } = obj);
  const arr = validateColors(tmp3);
  importDefault = arr;
  const items = [arr, tmp3];
  const obj1 = { x: 0.6 + 0.7142857142857143 * cosResult, y: 0.5 + 0.7142857142857143 * sinResult };
  const tmp2 = importDefault(dependencyMap[8])();
  const effect = React.useEffect(() => {
    if (arr.length < 2) {
      let obj = arr(closure_2[15]);
      const _Error = Error;
      const error = new Error("Invalid custom theme gradient colors");
      obj = {};
      obj = {};
      const _JSON = JSON;
      obj.gradientColors = JSON.stringify(globalThis);
      obj.extra = obj;
      obj.captureException(error, obj);
    }
  }, items);
  let tmp10Result = null;
  if (arr.length >= 2) {
    const obj2 = { colors: arr, locations: tmp7, start, end };
    if (wide) {
      const obj3 = { width };
      wide = obj3;
    }
    const items1 = [wide, , , , ];
    if (tall) {
      const obj4 = { height };
      tall = obj4;
    }
    items1[1] = tall;
    items1[2] = tmp.linearGradient;
    if (absolute) {
      absolute = tmp.absolute;
    }
    items1[3] = absolute;
    items1[4] = componentStyles;
    obj2.style = items1;
    tmp10Result = closure_6(importDefault(dependencyMap[9]), obj2);
    const tmp10 = closure_6;
    const tmp13 = importDefault(dependencyMap[9]);
  }
  return tmp10Result;
}
function wrapWithOverlayIfNeeded(arg0, withOverlay, styles, overlayColor, overlayOpacity) {
  let tmp = arg0;
  if (withOverlay) {
    let obj = { style: styles.absolute };
    const items = [arg0, ];
    obj = {};
    const items1 = [styles.softenGradient, ];
    obj = { backgroundColor: withOverlay(dependencyMap[7]).hexWithOpacity(overlayColor, overlayOpacity) };
    items1[1] = obj;
    obj.style = items1;
    items[1] = callback(View, obj);
    obj.children = items;
    tmp = callback2(View, obj);
    const obj4 = withOverlay(dependencyMap[7]);
  }
  return tmp;
}
function useThemedGradientCommon() {
  const obj = { styles: callback3() };
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[10])();
  const obj2 = arg1(dependencyMap[5]);
  const unsafe_rawColors = importDefault(dependencyMap[11]).unsafe_rawColors;
  obj.overlayColor = arg1(dependencyMap[5]).isThemeDark(tmp2) ? unsafe_rawColors.BLACK : unsafe_rawColors.WHITE;
  return obj;
}
function ActiveGuildThemeGradient(arg0) {
  let activeGuildTheme;
  let theme;
  ({ activeGuildTheme, theme } = arg0);
  let obj = Object.create(null);
  obj.activeGuildTheme = 0;
  obj.theme = 0;
  const merged = Object.assign(arg0, obj);
  if ("custom" === activeGuildTheme.type) {
    const customUserThemeSettings = activeGuildTheme.customUserThemeSettings;
    obj = {};
    const merged1 = Object.assign(merged);
    const items = [];
    HermesBuiltin.arraySpread(arg1(dependencyMap[12]).getSingleColorGuildThemeGradientColors(customUserThemeSettings.colors[0], theme), 0);
    obj["colors"] = items;
    obj["gradientColorStops"] = [];
    const gradientAngle = customUserThemeSettings.gradientAngle;
    let num3 = 0;
    if (null != gradientAngle) {
      num3 = gradientAngle;
    }
    obj["gradientAngle"] = num3;
    let GUILD_THEME_DEFAULT_BASE_MIX = customUserThemeSettings.baseMix;
    if (null == GUILD_THEME_DEFAULT_BASE_MIX) {
      GUILD_THEME_DEFAULT_BASE_MIX = arg1(dependencyMap[12]).GUILD_THEME_DEFAULT_BASE_MIX;
    }
    obj["baseMix"] = GUILD_THEME_DEFAULT_BASE_MIX;
    obj["theme"] = theme;
    return callback(CustomThemesGradient, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    obj["preset"] = activeGuildTheme.preset;
    return callback(GuildThemePresetGradient, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ softenGradient: { flex: 1 }, linearGradient: { flex: 1 }, absolute: { 0: "<string:408361903>", 9223372036854775807: "<string:2920093709>", -9223372036854775808: "<string:1058778651>", 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971358077182287, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022170280268213266 } });
let closure_9 = {};
let closure_10 = 0.5;
let closure_11 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/client_themes/native/ThemedGradient.tsx");

export default function ThemedGradient(overlayOpacity) {
  let overlayColor;
  let styles;
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const gradientOverride = overlayOpacity.gradientOverride;
  let obj = Object.create(null);
  obj.overlayOpacity = 0;
  obj.gradientOverride = 0;
  const merged = Object.assign(overlayOpacity, obj);
  ({ styles, overlayColor } = useThemedGradientCommon());
  const withOverlay = merged.withOverlay;
  const tmp3 = useThemedGradientCommon();
  obj = arg1(dependencyMap[16]);
  const items = [closure_5];
  const preset = obj.useStateFromStoresObject(items, () => ({ preset: gradientPreset.gradientPreset })).preset;
  const tmp5 = importDefault(dependencyMap[17])();
  let obj1 = arg1(dependencyMap[18]);
  const customThemeDisplaySettings = obj1.useCustomThemeDisplaySettings();
  if (null != gradientOverride) {
    if (tmp7) {
      if (gradientOverride.type === arg1(dependencyMap[19]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        obj = {};
        const merged1 = Object.assign(merged);
        const merged2 = Object.assign(gradientOverride.customThemeSettings);
        obj["theme"] = gradientOverride.theme;
        return wrapWithOverlayIfNeeded(callback(CustomThemesGradient, obj), withOverlay, styles, overlayColor, num);
      }
    }
    if (gradientOverride.type === arg1(dependencyMap[19]).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      obj1 = {};
      const merged3 = Object.assign(merged);
      obj1["gradient"] = gradientOverride;
      return wrapWithOverlayIfNeeded(callback(Gradient, obj1), withOverlay, styles, overlayColor, num);
    }
  }
  if (null != tmp5) {
    const obj2 = {};
    const merged4 = Object.assign(merged);
    obj2["activeGuildTheme"] = tmp5;
    obj2["theme"] = tmp4;
    let tmp12 = wrapWithOverlayIfNeeded(callback(ActiveGuildThemeGradient, obj2), withOverlay, styles, overlayColor, num);
  } else {
    if (tmp7) {
      if (tmp7) {
        const obj3 = {};
        const merged5 = Object.assign(merged);
        const merged6 = Object.assign(customThemeDisplaySettings.customTheme);
        obj3["theme"] = customThemeDisplaySettings.baseTheme;
        tmp12 = wrapWithOverlayIfNeeded(callback(CustomThemesGradient, obj3), withOverlay, styles, overlayColor, num);
      }
    }
    tmp12 = null;
    if (null != preset) {
      const obj4 = {};
      const merged7 = Object.assign(merged);
      obj4["gradient"] = preset;
      tmp12 = wrapWithOverlayIfNeeded(callback(Gradient, obj4), withOverlay, styles, overlayColor, num);
    }
  }
  return tmp12;
};
export { Gradient };
export { validateColors };
export const CustomThemedGradient = function CustomThemedGradient(overlayOpacity) {
  let overlayColor;
  let styles;
  let num = overlayOpacity.overlayOpacity;
  if (num === undefined) {
    num = 0.7;
  }
  const customTheme = overlayOpacity.customTheme;
  let obj = Object.create(null);
  obj.overlayOpacity = 0;
  obj.customTheme = 0;
  const merged = Object.assign(overlayOpacity, obj);
  obj = {};
  ({ styles, overlayColor } = useThemedGradientCommon());
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(customTheme.customThemeSettings);
  obj["theme"] = customTheme.theme;
  return wrapWithOverlayIfNeeded(callback(CustomThemesGradient, obj), merged.withOverlay, styles, overlayColor, num);
};
