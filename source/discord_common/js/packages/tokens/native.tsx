// Module ID: 689
// Function ID: 8478
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 689 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
const Themes = require(dependencyMap[0])._private.Themes;
const SemanticColors = require(dependencyMap[1])._private.SemanticColors;
const SemanticColorExperiments = require(dependencyMap[2])._private.SemanticColorExperiments;
const RawColors = require(dependencyMap[3])._private.RawColors;
const Shadows = require(dependencyMap[5])._private.Shadows;
let closure_7 = Symbol("semanticColor");
let obj = {
  themes: Themes,
  colors: importDefault(dependencyMap[6])(SemanticColors, (arg0, arg1) => ({ [closure_7]: arg1 })),
  unsafe_rawColors: RawColors,
  shadows: importDefault(dependencyMap[6])(Shadows, (arg0) => {
    const require = arg0;
    function createResolve(arg0) {
      return {
        resolve(isAndroid) {
          return isAndroid(isAndroid[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
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
  radii: require(dependencyMap[7]).Radius,
  modules: importDefault(dependencyMap[6])(require(dependencyMap[4])._private.Modules, (arg0) => importDefault(dependencyMap[6])(arg0, (arg0) => ({
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
      return arg0.resolve(obj);
    }
  }))),
  space: require(dependencyMap[8]).SpacePx,
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
          result = require(dependencyMap[10]).transformColorForReducedSaturation(tmp23, category, num4);
          const obj4 = require(dependencyMap[10]);
        }
        let result1 = result;
        if (1 !== num3) {
          const obj5 = require(dependencyMap[10]);
          result1 = obj5.transformColorContrast(result, category, tmp, num3);
        }
        let hexResult = result1;
        if (1 !== opacity3) {
          const obj6 = importDefault(dependencyMap[9])(result1);
          hexResult = importDefault(dependencyMap[9])(result1).alpha(opacity3).hex();
          const alphaResult = importDefault(dependencyMap[9])(result1).alpha(opacity3);
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
        const tmp65Result = importDefault(dependencyMap[9])(tmp35);
        let result2 = tmp65Result;
        if ("saturation" in tmp33) {
          result2 = tmp65Result.set("hsl.s", tmp33.saturation);
        }
        let result3 = result2;
        if ("lightness" in tmp33) {
          result3 = result2.set("hsl.l", tmp33.lightness);
        }
        let num = 1;
        const tmp65 = importDefault(dependencyMap[9]);
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
    return require(dependencyMap[10]).transformColorForReducedSaturation(arg0, generic, saturation);
  },
  adjustColorContrast(result, contrast, category, theme) {
    return require(dependencyMap[10]).transformColorContrast(result, category, theme, contrast);
  }
};
const _module = require(dependencyMap[11]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/tokens/native.tsx");

export default obj;
export const Theme = Themes;
export const RawColor = RawColors;
export const SemanticColor = SemanticColors;
export const Shadow = Shadows;
