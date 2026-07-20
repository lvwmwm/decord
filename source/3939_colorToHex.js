// Module ID: 3939
// Function ID: 32455
// Name: colorToHex
// Dependencies: []
// Exports: getEmbedBackground, getEmbedScrollGradientBackground, getGradientThemeMetadata, useGradientValue

// Module 3939 (colorToHex)
function colorToHex(red) {
  const obj = importDefault(dependencyMap[6]);
  return importDefault(dependencyMap[6]).rgb(red.red, red.green, red.blue).hex("rgb");
}
function getMixWithOpacity(gradientColorByPercentage, hexToRgbResult, arg2) {
  let tmp = importDefault(dependencyMap[8]);
  tmp = new tmp(gradientColorByPercentage.r, gradientColorByPercentage.g, gradientColorByPercentage.b, arg2);
  let tmp3 = importDefault(dependencyMap[8]);
  tmp3 = new tmp3(hexToRgbResult.r, hexToRgbResult.g, hexToRgbResult.b, 1 - arg2);
  return colorToHex(hexToRgbResult(dependencyMap[7]).mixColors(tmp, tmp3));
}
function getClientThemesGradientColorByPercentage(colors, MID) {
  colors = colors.colors;
  const mapped = colors.map((stop) => stop.stop);
  let obj = importDefault(dependencyMap[6]);
  const tmp = getClientThemesGradientHexColors(colors);
  const scaleResult = obj.scale(getClientThemesGradientHexColors(colors));
  const tmp3 = callback(obj.scale(getClientThemesGradientHexColors(colors)).domain(mapped)(MID).rgb(), 3);
  obj = { r: tmp3[0], g: tmp3[1], b: tmp3[2] };
  return obj;
}
function getClientThemesGradientHexColors(colors) {
  colors = colors.colors;
  return colors.map((arg0) => callback(closure_2[5]).unsafe_rawColors[arg0.token]);
}
function getGradientAngle(type) {
  if (type.type === arg1(dependencyMap[9]).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let gradientAngle = type.angle;
  } else {
    gradientAngle = type.customThemeSettings.gradientAngle;
  }
  return gradientAngle;
}
function getGradientColorByPercentage(type, MID) {
  if (type.type === MID(dependencyMap[9]).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    return getClientThemesGradientColorByPercentage(type, MID);
  } else {
    const colors = type.customThemeSettings.colors;
    MID = colors;
    if (1 === colors.length) {
      return MID(dependencyMap[7]).hexToRgb(colors[0]);
    } else {
      const mapped = colors.map((arg0, arg1) => arg1 / (colors.length - 1) * 100);
      let obj = importDefault(dependencyMap[6]);
      const scaleResult = obj.scale(colors);
      const tmp5 = callback(obj.scale(colors).domain(mapped)(MID).rgb(), 3);
      obj = {};
      [obj4.r, obj4.g] = tmp5;
      obj.b = tmp5[2];
      return obj;
    }
  }
}
function getBottomColorWithOpacity(type, hexToRgbResult, arg2) {
  if (getGradientAngle(type) > closure_8) {
    let START = obj.END;
  } else {
    START = obj.START;
  }
  return getMixWithOpacity(getGradientColorByPercentage(type, START), hexToRgbResult, arg2);
}
function getTopColorWithOpacity(type, hexToRgbResult, arg2) {
  if (getGradientAngle(type) > closure_8) {
    let END = obj.START;
  } else {
    END = obj.END;
  }
  return getMixWithOpacity(getGradientColorByPercentage(type, END), hexToRgbResult, arg2);
}
function calculateGradientValueWithOpacity(type, END, theme) {
  const obj = END(dependencyMap[10]);
  const isThemeDarkResult = obj.isThemeDark(theme);
  const hexToRgb = END(dependencyMap[7]).hexToRgb;
  if (isThemeDarkResult) {
    let hexToRgbResult = hexToRgb(tmp3.DARK);
  } else {
    hexToRgbResult = hexToRgb(tmp3.LIGHT);
  }
  if (type.type !== END(dependencyMap[9]).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let MID = obj.MID;
  }
  if (null != END) {
    MID = END;
  }
  if (type.type === END(dependencyMap[9]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    if (null != arg3) {
      let tmp7 = arg3;
    } else {
      const result = 0.2 * tmp12;
      if (obj3.isThemeDark(theme)) {
        let sum = 0.12 + result;
      } else {
        sum = 0.3 + result;
      }
      const obj3 = END(dependencyMap[10]);
    }
  } else {
    tmp7 = arg3;
    if (null == arg3) {
      END(dependencyMap[10]).isThemeDark(theme) ? obj.LEVEL_2 : obj.LEVEL_4;
      const obj2 = END(dependencyMap[10]);
    }
  }
  const tmp18 = getGradientAngle(type);
  if (MID === obj.START) {
    if (tmp18 < closure_8) {
      let tmp29 = getBottomColorWithOpacity(type, hexToRgbResult, tmp7);
    } else {
      tmp29 = getTopColorWithOpacity(type, hexToRgbResult, tmp7);
    }
  } else if (MID === obj.END) {
    if (tmp18 > closure_8) {
      let tmp24 = getBottomColorWithOpacity(type, hexToRgbResult, tmp7);
    } else {
      tmp24 = getTopColorWithOpacity(type, hexToRgbResult, tmp7);
    }
  } else {
    return getMixWithOpacity(getGradientColorByPercentage(type, MID), hexToRgbResult, tmp7);
  }
}
function getGradientValue(theme, END) {
  return calculateGradientValueWithOpacity(theme, END, theme.theme);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = 128;
let obj = { LEVEL_9: 0.9, [0.9]: "LEVEL_9", LEVEL_85: 0.85, [0.85]: "LEVEL_85", LEVEL_8: 0.8, [0.8]: "LEVEL_8", LEVEL_75: 0.75, [0.75]: "LEVEL_75", LEVEL_7: 0.7, [0.7]: "LEVEL_7", LEVEL_6: 0.6, [0.6]: "LEVEL_6", LEVEL_5: 0.5, [0.5]: "LEVEL_5", LEVEL_4: 0.4, [0.4]: "LEVEL_4", LEVEL_35: 0.35, [0.35]: "LEVEL_35", LEVEL_3: 0.3, [0.3]: "LEVEL_3", LEVEL_25: 0.25, [0.25]: "LEVEL_25", LEVEL_2: 0.2, [0.2]: "LEVEL_2", LEVEL_15: 0.15, [0.15]: "LEVEL_15", LEVEL_1: 0.1, [0.1]: "LEVEL_1" };
obj = { DARK: importDefault(dependencyMap[5]).unsafe_rawColors.BLACK, LIGHT: importDefault(dependencyMap[5]).unsafe_rawColors.WHITE };
obj = { START: 0, [0]: "START", MID: 50, [50]: "MID", END: 100, [100]: "END" };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/client_themes/native/ClientThemesUtils.tsx");

export const GRADIENT_ANGLE_BREAKPOINT = 128;
export const OverlayOpacity = obj;
export const OverlayColors = obj;
export const GradientPercentage = obj;
export { colorToHex };
export { getClientThemesGradientColorByPercentage };
export { getClientThemesGradientHexColors };
export const getGradientThemeMetadata = function getGradientThemeMetadata(gradientThemeFromFlags, gradient) {
  if (null != gradientThemeFromFlags) {
    if (null != gradient) {
      const tmp15 = getGradientValue(gradient, obj.START);
      const tmp19 = getGradientValue(gradient, obj.END);
      const tmp21 = getGradientAngle(gradient);
      let tmp = tmp19;
      if (tmp21 > closure_8) {
        tmp = tmp15;
      }
      let tmp3 = tmp15;
      if (tmp21 > closure_8) {
        tmp3 = tmp19;
      }
      if (gradient.type === gradient(dependencyMap[9]).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        let colors = getClientThemesGradientHexColors(gradient);
      } else {
        colors = gradient.customThemeSettings.colors;
      }
      let first = colors[0];
      let tmp8 = colors[colors.length - 1];
      if (gradient.type === gradient(dependencyMap[9]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const colors1 = gradient.customThemeSettings.colors;
        const mapped = colors1.map((arg0) => callback(closure_2[6])(arg0).luminance());
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(mapped, 0);
        const _Math2 = Math;
        const tmp25 = importDefault(dependencyMap[6]);
        const result = importDefault(dependencyMap[6])(colors1[mapped.indexOf(mapped, HermesBuiltin.apply(min, items, Math))]).set("hsl.s", 0.2);
        const result1 = result.set("hsl.l", 0.7);
        let hexResult = result1.hex();
        const _Math3 = Math;
        const items1 = [];
        const tmp25Result = importDefault(dependencyMap[6])(colors1[mapped.indexOf(mapped, HermesBuiltin.apply(min, items, Math))]);
        HermesBuiltin.arraySpread(mapped, 0);
        const _Math4 = Math;
        const tmp32 = importDefault(dependencyMap[6]);
        const result2 = importDefault(dependencyMap[6])(colors1[mapped.indexOf(mapped, HermesBuiltin.apply(max, items1, Math))]).set("hsl.s", 0.2);
        const result3 = result2.set("hsl.l", 0.9);
        const hexResult1 = result3.hex();
        let tmp11 = hexResult1;
        if ("dark" === gradientThemeFromFlags) {
          tmp11 = hexResult;
        }
        if ("dark" === gradientThemeFromFlags) {
          hexResult = hexResult1;
        }
        tmp8 = hexResult;
        first = tmp11;
        const tmp32Result = importDefault(dependencyMap[6])(colors1[mapped.indexOf(mapped, HermesBuiltin.apply(max, items1, Math))]);
      }
      let obj = { theme: gradientThemeFromFlags };
      obj = { gradient.start: tmp15 };
      obj.gradient.mid = getGradientValue(gradient, obj.MID);
      obj.gradient.end = tmp19;
      obj.gradient.top = tmp;
      obj.gradient.bottom = tmp3;
      obj.gradient.primary = first;
      obj.gradient.secondary = tmp8;
      obj.colors = obj;
      return obj;
    }
  }
  return null;
};
export { getGradientValue };
export const useGradientValue = function useGradientValue(END) {
  const arg1 = END;
  const importDefault = arg1;
  const tmp = importDefault(dependencyMap[11])();
  const dependencyMap = tmp;
  const tmp2 = importDefault(dependencyMap[12])();
  let closure_3 = tmp2;
  const items = [tmp, , , , ];
  let dark;
  if (null != arg1) {
    dark = arg1.dark;
  }
  items[1] = dark;
  let light;
  if (null != arg1) {
    light = arg1.light;
  }
  items[2] = light;
  items[3] = END;
  items[4] = tmp2;
  return React.useMemo((arg0, self) => {
    if (null == tmp) {
      return null;
    } else {
      let dark;
      if (null != self) {
        dark = self.dark;
      }
      if (null == dark) {
        let light;
        if (null != self) {
          light = self.light;
        }
        if (null == light) {
          return callback(tmp, arg0, tmp2);
        }
      }
      let tmp14 = arg0(tmp[10]).isThemeDark(tmp2) ? tmp13.LEVEL_2 : tmp13.LEVEL_4;
      const obj = arg0(tmp[10]);
      if (obj2.isThemeDark(tmp2)) {
        let dark1;
        if (!tmp19) {
          dark1 = self.dark;
        }
        light = dark1;
      } else if (!tmp19) {
        light = self.light;
      }
      if (null != light) {
        tmp14 = light;
      }
      return callback(tmp, arg0, tmp2, tmp14);
    }
  }, items);
};
export const getEmbedScrollGradientBackground = function getEmbedScrollGradientBackground() {
  let gradientPreset = arg1(dependencyMap[13]).getCustomBackgroundGradient();
  if (null == gradientPreset) {
    gradientPreset = closure_6.gradientPreset;
  }
  let tmp2 = null;
  if (null != gradientPreset) {
    tmp2 = gradientPreset;
  }
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = getGradientValue(tmp2);
  }
  return tmp3;
};
export const getEmbedBackground = function getEmbedBackground() {
  if (null == closure_6.gradientPreset) {
    if (!closure_7.hasCustomTheme()) {
      return null;
    }
  }
  const obj = arg1(dependencyMap[10]);
  const tmp2 = obj.isThemeDark(theme.theme) ? obj.DARK : obj.LIGHT;
  return arg1(dependencyMap[7]).hexWithOpacity(tmp2, obj.LEVEL_1);
};
