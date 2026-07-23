// Module ID: 689
// Function ID: 8478
// Name: _createForOfIteratorHelperLoose
// Dependencies: [690, 691, 692, 693, 694, 695, 696, 783, 784, 666, 785, 2]

// Module 689 (_createForOfIteratorHelperLoose)
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
const Themes = require("items")._private.Themes;
const SemanticColors = require("_private")._private.SemanticColors;
const SemanticColorExperiments = require("_private")._private.SemanticColorExperiments;
const RawColors = require("_private")._private.RawColors;
const Shadows = require("_private")._private.Shadows;
let closure_7 = Symbol("semanticColor");
obj = {
  themes: Themes,
  colors: require("mapValues")(SemanticColors, (arg0, arg1) => ({ [closure_7]: arg1 })),
  unsafe_rawColors: RawColors,
  shadows: require("mapValues")(Shadows, (arg0) => {
    let closure_0 = arg0;
    function createResolve(arg0) {
      let closure_0 = arg0;
      return {
        resolve(isAndroid) {
          return dependencyMap(dependencyMap[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        }
      };
    }
    return {
      shadowOffset: createResolve((shadowOffset) => {
        shadowOffset = undefined;
        if (!arg1) {
          shadowOffset = shadowOffset.shadowOffset;
        }
        return shadowOffset;
      }),
      shadowColor: createResolve((shadowColorAndroid) => arg1 ? shadowColorAndroid.shadowColorAndroid : shadowColorAndroid.shadowColor),
      shadowOpacity: createResolve((shadowOpacity) => shadowOpacity.shadowOpacity),
      shadowRadius: createResolve((shadowRadius) => shadowRadius.shadowRadius),
      elevation: createResolve((elevation) => elevation.elevation)
    };
  }),
  radii: require("Radius").Radius,
  modules: require("mapValues")(require("_createForOfIteratorHelperLoose")._private.Modules, (arg0) => importDefault(696)(arg0, (arg0) => {
    let closure_0 = arg0;
    return {
      resolve(arg0) {
        let density;
        let enabledExperiments;
        ({ enabledExperiments, density } = arg0);
        const obj = {};
        if (null == enabledExperiments) {
          enabledExperiments = [];
        }
        obj.enabledExperiments = enabledExperiments;
        let str = "compact";
        if (null != density) {
          str = density;
        }
        obj.density = str;
        return closure_0.resolve(obj);
      }
    };
  })),
  space: require("Layout").SpacePx,
  internal: obj
};
obj = {
  isSemanticColor(BACKGROUND_BASE_LOW) {
    let tmp = "object" === typeof BACKGROUND_BASE_LOW;
    if (tmp) {
      tmp = null !== BACKGROUND_BASE_LOW;
    }
    if (tmp) {
      tmp = closure_7 in BACKGROUND_BASE_LOW;
    }
    return tmp;
  },
  getSemanticColorName(BACKGROUND_BASE_LOW) {
    return BACKGROUND_BASE_LOW[closure_7];
  },
  resolveSemanticColor(theme, TEXT_FEEDBACK_CRITICAL, semanticColorContextFromThemeContext) {
    let tmp17;
    let tmp = theme;
    if ("string" === typeof theme) {
      const formatted = theme.toUpperCase();
      if (formatted in Themes) {
        tmp = Themes[formatted];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid theme: " + theme);
        throw error;
      }
    }
    const category = tmp10.category;
    const tmp12 = RawColors[SemanticColors[TEXT_FEEDBACK_CRITICAL[closure_7]][tmp].raw];
    const opacity = tmp11.opacity;
    let enabledExperiments;
    if (null != semanticColorContextFromThemeContext) {
      enabledExperiments = semanticColorContextFromThemeContext.enabledExperiments;
    }
    let tmp14 = tmp12;
    let opacity2 = opacity;
    if (null != enabledExperiments) {
      tmp14 = tmp12;
      opacity2 = opacity;
      if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
        tmp14 = tmp12;
        opacity2 = opacity;
        if (null != SemanticColorExperiments[TEXT_FEEDBACK_CRITICAL[closure_7]]) {
          const tmp16 = _createForOfIteratorHelperLoose(semanticColorContextFromThemeContext.enabledExperiments);
          const iter = tmp16();
          let iter2 = iter;
          tmp14 = tmp12;
          opacity2 = opacity;
          if (!iter.done) {
            while (true) {
              tmp17 = undefined;
              if (null != tmp59) {
                let tmp18 = tmp59[iter2.value];
                let tmp19 = tmp18;
                if (null != tmp18) {
                  tmp17 = tmp18[tmp];
                  let tmp20 = tmp18;
                }
              }
              if (null != tmp17) {
                break;
              } else {
                let iter3 = tmp16();
                iter2 = iter3;
                tmp14 = tmp12;
                opacity2 = opacity;
              }
            }
            tmp14 = RawColors[tmp17.raw];
            opacity2 = tmp17.opacity;
          }
        }
      }
    }
    if (null != semanticColorContextFromThemeContext) {
      if (semanticColorContextFromThemeContext.isProfileTheme) {
        if ("userProfileThemes" in tmp10) {
          theme = undefined;
          if (null != semanticColorContextFromThemeContext) {
            let gradient = semanticColorContextFromThemeContext.gradient;
            if (null != gradient) {
              theme = gradient.theme;
            }
          }
          let tmp39 = null;
          if (null != theme) {
            tmp39 = tmp10.userProfileThemes[theme];
          }
          let tmp23 = tmp14;
          let opacity3 = opacity2;
          if (null != tmp39) {
            tmp23 = RawColors[tmp39.raw];
            opacity3 = tmp39.opacity;
          }
        }
        let contrast;
        if (null != semanticColorContextFromThemeContext) {
          contrast = semanticColorContextFromThemeContext.contrast;
        }
        let num3 = 1;
        if (null != contrast) {
          num3 = contrast;
        }
        let saturation;
        if (null != semanticColorContextFromThemeContext) {
          saturation = semanticColorContextFromThemeContext.saturation;
        }
        let num4 = 1;
        if (null != saturation) {
          num4 = saturation;
        }
        let result = tmp23;
        if (num4 < 1) {
          result = require(785) /* interpolate */.transformColorForReducedSaturation(tmp23, category, num4);
          const obj4 = require(785) /* interpolate */;
        }
        let result1 = result;
        if (1 !== num3) {
          const obj5 = require(785) /* interpolate */;
          result1 = obj5.transformColorContrast(result, category, tmp, num3);
        }
        let hexResult = result1;
        if (1 !== opacity3) {
          const obj6 = importDefault(666)(result1);
          hexResult = importDefault(666)(result1).alpha(opacity3).hex();
          const alphaResult = importDefault(666)(result1).alpha(opacity3);
        }
        return hexResult;
      }
    }
    gradient = undefined;
    if (null != semanticColorContextFromThemeContext) {
      gradient = semanticColorContextFromThemeContext.gradient;
    }
    tmp23 = tmp14;
    opacity3 = opacity2;
    if (null != gradient) {
      let gradient1 = null;
      if ("gradient" in tmp10) {
        gradient1 = tmp10.gradient;
      }
      let enabledExperiments1;
      if (null != semanticColorContextFromThemeContext) {
        enabledExperiments1 = semanticColorContextFromThemeContext.enabledExperiments;
      }
      let tmp26 = gradient1;
      if (null != enabledExperiments1) {
        tmp26 = gradient1;
        if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
          tmp26 = gradient1;
          if (null != SemanticColorExperiments[TEXT_FEEDBACK_CRITICAL[closure_7]]) {
            const tmp28 = _createForOfIteratorHelperLoose(semanticColorContextFromThemeContext.enabledExperiments);
            const iter4 = tmp28();
            let iter5 = iter4;
            tmp26 = gradient1;
            if (!iter4.done) {
              while (true) {
                let gradient2;
                if (null != tmp62) {
                  let tmp30 = tmp62[iter5.value];
                  let tmp31 = tmp30;
                  if (null != tmp30) {
                    gradient2 = tmp30.gradient;
                    let tmp32 = tmp30;
                  }
                }
                tmp26 = gradient2;
                if (null != gradient2) {
                  break;
                } else {
                  let iter6 = tmp28();
                  iter5 = iter6;
                  tmp26 = gradient1;
                  if (iter6.done) {
                    break;
                  }
                }
              }
            }
          }
        }
      }
      let tmp33;
      if (null != tmp26) {
        let theme1;
        if (null != semanticColorContextFromThemeContext) {
          theme1 = semanticColorContextFromThemeContext.gradient.theme;
        }
        tmp33 = tmp26[theme1];
      }
      tmp23 = tmp14;
      opacity3 = opacity2;
      if (null != tmp33) {
        if (tmp33.color in RawColors) {
          let tmp35 = RawColors[tmp33.color];
        } else if (null != semanticColorContextFromThemeContext) {
          tmp35 = semanticColorContextFromThemeContext.gradient.colors[tmp33.color];
        }
        const tmp65Result = importDefault(666)(tmp35);
        let result2 = tmp65Result;
        if ("saturation" in tmp33) {
          result2 = tmp65Result.set("hsl.s", tmp33.saturation);
        }
        let result3 = result2;
        if ("lightness" in tmp33) {
          result3 = result2.set("hsl.l", tmp33.lightness);
        }
        let num = 1;
        const tmp65 = importDefault(666);
        if ("opacity" in tmp33) {
          num = tmp33.opacity;
        }
        opacity3 = num;
        tmp23 = result3.hex();
        const hexResult1 = result3.hex();
      }
    }
  },
  adjustColorSaturation(arg0, saturation, generic) {
    return require(785) /* interpolate */.transformColorForReducedSaturation(arg0, generic, saturation);
  },
  adjustColorContrast(result, contrast, category, theme) {
    return require(785) /* interpolate */.transformColorContrast(result, category, theme, contrast);
  }
};
let result = require("_private").fileFinishedImporting("../discord_common/js/packages/tokens/native.tsx");

export default obj;
export const Theme = Themes;
export const RawColor = RawColors;
export const SemanticColor = SemanticColors;
export const Shadow = Shadows;
