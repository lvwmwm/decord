// Module ID: 14064
// Function ID: 106794
// Name: _createForOfIteratorHelperLoose
// Dependencies: [0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0]
// Exports: convertThemesToAnimatedThemes, useLaunchWelcomeSystemTheme

// Module 14064 (_createForOfIteratorHelperLoose)
import __exportStarResult1 from "__exportStarResult1";
import { ThemeTypes } from "__exportStarResult1";

function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const tmp = _createForOfIteratorHelperLoose(arg1(dependencyMap[2]).getAllMobileThemes());
  const iter = tmp();
  let iter2 = iter;
  let num = 0;
  let num2 = 0;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let type = value.type;
      let tmp2 = closure_0;
      let tmp3 = closure_2;
      if (closure_0(closure_2[3]).ClientThemeType.STANDARD_BACKGROUND_THEME === type) {
        let _Math3 = Math;
        let bound = Math.max(1, num);
      } else {
        let tmp7 = closure_0;
        let tmp8 = closure_2;
        if (closure_0(closure_2[3]).ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
          let _Math2 = Math;
          bound = Math.max(value.colors.length, num);
        } else {
          let tmp4 = closure_0;
          let tmp5 = closure_2;
          bound = num;
          if (closure_0(closure_2[3]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
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
  let tmp2 = importDefault(dependencyMap[4]);
  if ("light" !== arg0) {
    tmp2 = new tmp2(0, 0, 0, arg2);
  } else {
    tmp2 = new tmp2(255, 255, 255, arg3);
  }
  const obj = PRIMARY_800(dependencyMap[5]);
  ({ r, g, b } = PRIMARY_800(dependencyMap[5]).hexToRgb(PRIMARY_800));
  let num8 = 0.2;
  if ("light" !== arg0) {
    num8 = 0.3;
  }
  const hexToRgbResult = PRIMARY_800(dependencyMap[5]).hexToRgb(PRIMARY_800);
  let tmp10 = importDefault(dependencyMap[4]);
  tmp10 = new tmp10(r, g, b, num8);
  const obj2 = PRIMARY_800(dependencyMap[5]);
  return PRIMARY_800(dependencyMap[5]).mixColors(tmp2, tmp10).toHexString();
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
function convertBackgroundGradientToAnimatedTheme(theme) {
  const arg1 = theme;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const obj = { theme: theme.theme, name: theme.getName() };
  const midpointPercentage = theme.midpointPercentage;
  let num = 50;
  if (null != midpointPercentage) {
    num = midpointPercentage;
  }
  obj.midpointPercentage = num;
  const angle = theme.angle;
  let num2 = 0;
  if (null != angle) {
    num2 = angle;
  }
  obj.angle = num2;
  const colors = theme.colors;
  const mapped = colors.map((stop) => ({ hex: callback(stop.theme, arg1(arg2[6]).unsafe_rawColors[stop.token], arg1, arg2), stop: stop.stop }));
  obj.colors = padWithLast(mapped, getMaxColors());
  return obj;
}
function convertStandardThemeToAnimatedTheme(theme, enabledExperiments, TEXT_FEEDBACK_CRITICAL) {
  theme = theme.theme;
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
  const internal = importDefault(dependencyMap[6]).internal;
  let obj = { enabledExperiments };
  const semanticColor = internal.resolveSemanticColor(str, TEXT_FEEDBACK_CRITICAL, obj);
  obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: 50, angle: 0, colors: padWithLast(items, getMaxColors()) };
  const items = [{ hex: semanticColor, stop: 20 }, { hex: semanticColor, stop: 40 }, { hex: semanticColor, stop: 60 }, { hex: semanticColor, stop: 80 }, { hex: semanticColor, stop: 100 }];
  return obj;
}
function convertCustomBackgroundGradientToAnimatedTheme(theme) {
  const arg1 = theme;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const obj = { theme: theme.theme, name: theme.getName(), midpointPercentage: 50 };
  const gradientAngle = theme.customThemeSettings.gradientAngle;
  let num = 0;
  if (null != gradientAngle) {
    num = gradientAngle;
  }
  obj.angle = num;
  const colors = theme.customThemeSettings.colors;
  const mapped = colors.map((self) => {
    const obj = { hex: callback(self.theme, self, arg1, arg2) };
    let num = 0;
    if (self.customThemeSettings.colors.length > 1) {
      num = arg1 * (100 / (self.customThemeSettings.colors.length - 1));
    }
    obj.stop = num;
    return obj;
  });
  obj.colors = padWithLast(mapped, getMaxColors());
  return obj;
}
const result = require("__exportStarResult1").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearancePickerUtils.tsx");

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
    BACKGROUND_SURFACE_HIGH = importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH;
  }
  const items1 = [];
  const tmp3 = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let value = iter.value;
      let type = value.type;
      let tmp4 = closure_0;
      let tmp5 = closure_2;
      if (closure_0(closure_2[3]).ClientThemeType.STANDARD_BACKGROUND_THEME === type) {
        let tmp14 = closure_11;
        let arr = items1.push(closure_11(value, items, BACKGROUND_SURFACE_HIGH));
      } else {
        let tmp6 = closure_0;
        let tmp7 = closure_2;
        if (closure_0(closure_2[3]).ClientThemeType.BACKGROUND_GRADIENT_PRESET === type) {
          let tmp12 = closure_10;
          arr = items1.push(closure_10(value, num, num2));
        } else {
          let tmp8 = closure_0;
          let tmp9 = closure_2;
          if (closure_0(closure_2[3]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT === type) {
            let tmp10 = closure_12;
            let arr1 = items1.push(closure_12(value, num, num2));
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
  if (importDefault(dependencyMap[7])() === ThemeTypes.LIGHT) {
    let DARKER = ThemeTypes.LIGHT;
  } else {
    DARKER = ThemeTypes.DARKER;
  }
  const token = arg1(dependencyMap[8]).useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, DARKER);
  const arg1 = token;
  const items = [token];
  return React.useMemo(() => {
    let obj = {};
    const intl = token(closure_2[9]).intl;
    obj.name = intl.string(token(closure_2[9]).t.zlvNOj);
    obj = { hex: token, stop: 20 };
    const items = [obj, , , , ];
    obj = { hex: token, stop: 40 };
    items[1] = obj;
    items[2] = { hex: token, stop: 60 };
    items[3] = { hex: token, stop: 80 };
    items[4] = { hex: token, stop: 100 };
    obj.colors = callback2(items, callback());
    return obj;
  }, items);
};
