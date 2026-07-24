// Module ID: 14238
// Function ID: 109345
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 482, 4063, 3944, 3975, 3974, 689, 1315, 3834, 1212, 2]
// Exports: convertThemesToAnimatedThemes, useLaunchWelcomeSystemTheme

// Module 14238 (_createForOfIteratorHelperLoose)
import result from "result";
import { ThemeTypes } from "sum";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getMaxColors() {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(require(4063) /* getCustomThemesName */.getAllMobileThemes());
  const iter = tmp();
  let iter2 = iter;
  let num = 0;
  let num2 = 0;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let type = value.type;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      if (require(3944) /* ClientThemeType */.ClientThemeType.STANDARD_BACKGROUND_THEME === type) {
        let _Math3 = Math;
        let bound = Math.max(1, num);
      } else {
        let tmp7 = require;
        let tmp8 = dependencyMap;
        if (require(3944) /* ClientThemeType */.ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
          let _Math2 = Math;
          bound = Math.max(value.colors.length, num);
        } else {
          let tmp4 = require;
          let tmp5 = dependencyMap;
          bound = num;
          if (require(3944) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
            let _Math = Math;
            bound = Math.max(value.customThemeSettings.colors.length, num);
          }
        }
      }
      iter3 = tmp();
      num = bound;
      iter2 = iter3;
      num2 = bound;
    } while (!iter3.done);
  }
  return num2;
}
function mix(arg0, PRIMARY_800) {
  let b;
  let g;
  let r;
  let tmp2 = importDefault(3975);
  if ("light" !== arg0) {
    tmp2 = new tmp2(0, 0, 0, arg2);
  } else {
    tmp2 = new tmp2(255, 255, 255, arg3);
  }
  const obj = require(3974) /* hexToRgb */;
  ({ r, g, b } = require(3974) /* hexToRgb */.hexToRgb(PRIMARY_800));
  let num8 = 0.2;
  if ("light" !== arg0) {
    num8 = 0.3;
  }
  const hexToRgbResult = require(3974) /* hexToRgb */.hexToRgb(PRIMARY_800);
  let tmp10 = importDefault(3975);
  tmp10 = new tmp10(r, g, b, num8);
  const obj2 = require(3974) /* hexToRgb */;
  return require(3974) /* hexToRgb */.mixColors(tmp2, tmp10).toHexString();
}
function padWithLast(mapped, maxColors) {
  let num = maxColors;
  if (maxColors === undefined) {
    num = 5;
  }
  const items = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 < mapped.length) {
      let arr = items.push(mapped[num2]);
    } else {
      let obj = { hex: mapped[mapped.length - 1].hex, stop: 100 };
      arr = items.push(obj);
    }
  }
  return items;
}
function convertBackgroundGradientToAnimatedTheme(value, prop, prop1) {
  let closure_0 = value;
  let closure_1 = prop;
  let closure_2 = prop1;
  const obj = { theme: value.theme, name: value.getName() };
  const midpointPercentage = value.midpointPercentage;
  let num = 50;
  if (null != midpointPercentage) {
    num = midpointPercentage;
  }
  obj.midpointPercentage = num;
  const angle = value.angle;
  let num2 = 0;
  if (null != angle) {
    num2 = angle;
  }
  obj.angle = num2;
  const colors = value.colors;
  const mapped = colors.map((stop) => ({ hex: outer1_8(value.theme, prop(prop1[6]).unsafe_rawColors[stop.token], prop, prop1), stop: stop.stop }));
  obj.colors = padWithLast(mapped, getMaxColors());
  return obj;
}
function convertStandardThemeToAnimatedTheme(value, items, BACKGROUND_SURFACE_HIGH) {
  const theme = value.theme;
  let str = "light";
  if (ThemeTypes.LIGHT !== theme) {
    str = "dark";
    if (ThemeTypes.DARK !== theme) {
      str = "darker";
      if (ThemeTypes.DARKER !== theme) {
        str = "midnight";
        if (ThemeTypes.MIDNIGHT !== theme) {
          str = "light";
        }
      }
    }
  }
  const internal = importDefault(689).internal;
  let obj = { enabledExperiments: items };
  const semanticColor = internal.resolveSemanticColor(str, BACKGROUND_SURFACE_HIGH, obj);
  obj = { theme: value.theme, name: value.getName(), midpointPercentage: 50, angle: 0, colors: padWithLast(items, getMaxColors()) };
  items = [{ hex: semanticColor, stop: 20 }, { hex: semanticColor, stop: 40 }, { hex: semanticColor, stop: 60 }, { hex: semanticColor, stop: 80 }, { hex: semanticColor, stop: 100 }];
  return obj;
}
function convertCustomBackgroundGradientToAnimatedTheme(value, prop, prop1) {
  let closure_0 = value;
  let closure_1 = prop;
  let closure_2 = prop1;
  let obj = { theme: value.theme, name: value.getName(), midpointPercentage: 50 };
  const gradientAngle = value.customThemeSettings.gradientAngle;
  let num = 0;
  if (null != gradientAngle) {
    num = gradientAngle;
  }
  obj.angle = num;
  const colors = value.customThemeSettings.colors;
  const mapped = colors.map((arg0, arg1) => {
    const obj = { hex: outer1_8(value.theme, arg0, closure_1, closure_2) };
    let num = 0;
    if (value.customThemeSettings.colors.length > 1) {
      num = arg1 * (100 / (value.customThemeSettings.colors.length - 1));
    }
    obj.stop = num;
    return obj;
  });
  obj.colors = padWithLast(mapped, getMaxColors());
  return obj;
}
const result = require("getCustomThemesName").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearancePickerUtils.tsx");

export const convertThemesToAnimatedThemes = function convertThemesToAnimatedThemes(arg0, prop, prop1, memo, BACKGROUND_SURFACE_HIGH) {
  let iter2;
  let num = prop;
  let num2 = prop1;
  let items = memo;
  if (prop === undefined) {
    num = 0.7;
  }
  if (num2 === undefined) {
    num2 = 0.8;
  }
  if (items === undefined) {
    items = [];
  }
  if (BACKGROUND_SURFACE_HIGH === undefined) {
    BACKGROUND_SURFACE_HIGH = importDefault(689).colors.BACKGROUND_SURFACE_HIGH;
  }
  const items1 = [];
  const tmp3 = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let value = iter.value;
      let type = value.type;
      let tmp4 = require;
      let tmp5 = dependencyMap;
      if (require(3944) /* ClientThemeType */.ClientThemeType.STANDARD_BACKGROUND_THEME === type) {
        let tmp14 = convertStandardThemeToAnimatedTheme;
        let arr = items1.push(convertStandardThemeToAnimatedTheme(value, items, BACKGROUND_SURFACE_HIGH));
      } else {
        let tmp6 = require;
        let tmp7 = dependencyMap;
        if (require(3944) /* ClientThemeType */.ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
          let tmp12 = convertBackgroundGradientToAnimatedTheme;
          arr = items1.push(convertBackgroundGradientToAnimatedTheme(value, num, num2));
        } else {
          let tmp8 = require;
          let tmp9 = dependencyMap;
          if (require(3944) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
            let tmp10 = convertCustomBackgroundGradientToAnimatedTheme;
            let arr1 = items1.push(convertCustomBackgroundGradientToAnimatedTheme(value, num, num2));
          }
        }
      }
      iter2 = tmp3();
      iter = iter2;
    } while (!iter2.done);
  }
  return items1;
};
export const useLaunchWelcomeSystemTheme = function useLaunchWelcomeSystemTheme() {
  if (importDefault(1315)() === ThemeTypes.LIGHT) {
    let DARKER = ThemeTypes.LIGHT;
  } else {
    DARKER = ThemeTypes.DARKER;
  }
  token = token(3834).useToken(importDefault(689).colors.BACKGROUND_BASE_LOW, DARKER);
  let items = [token];
  return React.useMemo(() => {
    let obj = { theme: "system", name: null, midpointPercentage: 50, angle: 0 };
    const intl = token(outer1_2[9]).intl;
    obj.name = intl.string(token(outer1_2[9]).t.zlvNOj);
    obj = { hex: token, stop: 20 };
    const items = [obj, , , , ];
    obj = { hex: token, stop: 40 };
    items[1] = obj;
    items[2] = { hex: token, stop: 60 };
    items[3] = { hex: token, stop: 80 };
    items[4] = { hex: token, stop: 100 };
    obj.colors = outer1_9(items, outer1_7());
    return obj;
  }, items);
};
