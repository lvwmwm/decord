// Module ID: 587
// Function ID: 588
// Name: native
// Dependencies: [588, 589, 590, 591, 592, 593, 594, 681, 682, 683, 684, 2]

// Module 587 (native)
import ThemeTypes from "ThemeTypes" /* 588 */;
import _mod589 from "module_589" /* 589 */;
import _mod590 from "module_590" /* 590 */;
import _mod591 from "module_591" /* 591 */;
import _mod592 from "module_592" /* 592 */;
import _mod593 from "module_593" /* 593 */;
import mapValuesDefault from "mapValues" /* 594 */;
import Radius from "Radius" /* 681 */;
import Layout from "Layout" /* 682 */;
import _modDef683 from "module_683" /* 683 */;
import transforms from "transforms" /* 684 */;
import size from "module_2" /* 2 */;

function sanitizeTheme(theme) {
  if (set.has(theme)) {
    return theme;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid theme: " + theme);
    throw error;
  }
}
const Themes = ThemeTypes._private.Themes;
const SemanticColors = _mod589._private.SemanticColors;
const SemanticColorExperiments = _mod590._private.SemanticColorExperiments;
const RawColors = _mod591._private.RawColors;
const Modules = _mod592._private.Modules;
const Shadows = _mod593._private.Shadows;
let closure_6 = Symbol("semanticColor");
const set = new Set(Object.values(Themes));
function clamp01(arg0) {
  return Math.min(1, Math.max(0, arg0));
}
let obj = {
  themes: ThemeTypes.ThemeTypes,
  colors: mapValuesDefault(SemanticColors, (arg0, arg1) => ({ [closure_1_6]: arg1 })),
  unsafe_rawColors: RawColors,
  shadows: mapValuesDefault(Shadows, (arg0) => {
    function resolve(isAndroid) {
      return f86295(closure_0[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
    }
    let closure_0 = arg0;
    const f86291 = (shadowOffset, arg1) => {
      shadowOffset = undefined;
      if (!arg1) {
        shadowOffset = shadowOffset.shadowOffset;
      }
      return shadowOffset;
    };
    const f86292 = (shadowColorAndroid, arg1) => arg1 ? shadowColorAndroid.shadowColorAndroid : shadowColorAndroid.shadowColor;
    const f86293 = (shadowOpacity) => shadowOpacity.shadowOpacity;
    const f86294 = (shadowRadius) => shadowRadius.shadowRadius;
    const f86295 = (elevation) => elevation.elevation;
    return { shadowOffset: { resolve }, shadowColor: { resolve }, shadowOpacity: { resolve }, shadowRadius: { resolve }, elevation: { resolve } };
  }),
  radii: Radius.Radius,
  modules: mapValuesDefault(Modules, (arg0) => mapValuesDefault(arg0, (arg0) => {
    let resolve = arg0;
    let obj = {
      resolve(arg0) {
        let density;
        let enabledExperiments;
        ({ enabledExperiments, density } = arg0);
        resolve = resolve.resolve;
        if (enabledExperiments == null) {
          enabledExperiments = [];
        }
        const obj = { enabledExperiments, density };
        if (density == null) {
          density = "compact";
        }
        return resolve(obj);
      }
    };
    return obj;
  })),
  space: Layout.SpacePx,
  internal: {
    isSemanticColor(BACKGROUND_BASE_LOW) {
      let tmp = typeof BACKGROUND_BASE_LOW === "object";
      if (typeof BACKGROUND_BASE_LOW === "object") {
        tmp = null !== BACKGROUND_BASE_LOW;
      }
      if (tmp) {
        tmp = closure_6 in BACKGROUND_BASE_LOW;
      }
      return tmp;
    },
    getSemanticColorName(BACKGROUND_BASE_LOW) {
      return BACKGROUND_BASE_LOW[closure_6];
    },
    resolveSemanticColor(theme, BACKGROUND_SURFACE_HIGH, semanticColorContextFromThemeContext) {
      sanitizeTheme(theme);
      const category = tmp3.category;
      let result = RawColors[tmp4.raw];
      let opacity = tmp4.opacity;
      let enabledExperiments1;
      const tmp2 = closure_6;
      if (semanticColorContextFromThemeContext != null) {
        enabledExperiments1 = semanticColorContextFromThemeContext.enabledExperiments;
      }
      if (null != enabledExperiments1) {
        if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
          if (null != SemanticColorExperiments[BACKGROUND_SURFACE_HIGH[tmp2]]) {
            const enabledExperiments = semanticColorContextFromThemeContext.enabledExperiments;
            for (const item10035 of enabledExperiments) {
              let tmp12;
              if (tmp8 != null) {
                let tmp14 = tmp8[tmp11];
                if (tmp14 != null) {
                  tmp12 = tmp14[theme];
                }
              }
              if (null != tmp12) {
                result = RawColors[tmp12.raw];
                opacity = tmp12.opacity;
                obj.return();
                break;
              }
              break;
            }
          }
        }
      }
      let isProfileTheme;
      if (semanticColorContextFromThemeContext != null) {
        isProfileTheme = semanticColorContextFromThemeContext.isProfileTheme;
      }
      if (isProfileTheme) {
        let hexResult;
        if ("userProfileThemes" in SemanticColors[BACKGROUND_SURFACE_HIGH[closure_6]]) {
          let theme1;
          const userProfileThemes = tmp3.userProfileThemes;
          if (semanticColorContextFromThemeContext != null) {
            const gradient = semanticColorContextFromThemeContext.gradient;
            if (gradient != null) {
              theme1 = gradient.theme;
            }
          }
          let tmp56 = null;
          if (null != theme1) {
            tmp56 = userProfileThemes[theme1];
          }
          if (null != tmp56) {
            result = RawColors[tmp56.raw];
            opacity = tmp56.opacity;
          }
        }
        let num6;
        if (semanticColorContextFromThemeContext != null) {
          num6 = semanticColorContextFromThemeContext.contrast;
        }
        if (num6 == null) {
          num6 = 1;
        }
        let num7;
        if (semanticColorContextFromThemeContext != null) {
          num7 = semanticColorContextFromThemeContext.saturation;
        }
        if (num7 == null) {
          num7 = 1;
        }
        if (num7 < 1) {
          const obj6 = transforms;
          result = obj6.transformColorForReducedSaturation(result, category, num7);
        }
        if (1 !== num6) {
          const obj7 = transforms;
          result = obj7.transformColorContrast(result, category, theme, num6);
        }
        if (1 === opacity) {
          hexResult = result;
        } else {
          const obj8 = _modDef683(result);
          const alphaResult = obj8.alpha(opacity);
          hexResult = alphaResult.hex();
        }
        return hexResult;
      }
      let gradient1;
      if (semanticColorContextFromThemeContext != null) {
        gradient1 = semanticColorContextFromThemeContext.gradient;
      }
      if (null != gradient1) {
        let gradient2 = null;
        if ("gradient" in SemanticColors[BACKGROUND_SURFACE_HIGH[closure_6]]) {
          gradient2 = tmp3.gradient;
        }
        let tmp22 = gradient2;
        let enabledExperiments3;
        if (semanticColorContextFromThemeContext != null) {
          enabledExperiments3 = semanticColorContextFromThemeContext.enabledExperiments;
        }
        if (null != enabledExperiments3) {
          if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
            if (null != SemanticColorExperiments[BACKGROUND_SURFACE_HIGH[closure_6]]) {
              const enabledExperiments2 = semanticColorContextFromThemeContext.enabledExperiments;
              for (const item10067 of enabledExperiments2) {
                let gradient3;
                if (tmp26 != null) {
                  let tmp32 = tmp26[tmp29];
                  if (tmp32 != null) {
                    gradient3 = tmp32.gradient;
                  }
                }
                if (null != gradient3) {
                  tmp22 = gradient3;
                  obj2.return();
                  break;
                }
                break;
              }
            }
          }
        }
        let tmp36;
        if (tmp22 != null) {
          let theme2;
          if (semanticColorContextFromThemeContext != null) {
            theme2 = semanticColorContextFromThemeContext.gradient.theme;
          }
          tmp36 = tmp22[theme2];
        }
        if (null != tmp36) {
          let tmp47;
          let num2 = 1;
          if (!semanticColorContextFromThemeContext.isProfileTheme) {
            let num = semanticColorContextFromThemeContext.gradient.unsupported_overlayOpacityMultiplier;
            if (num == null) {
              num = 1;
            }
            num2 = num;
          }
          const _Number = Number;
          let num3 = 1;
          if (Number.isFinite(num2)) {
            num3 = clamp01(num2);
          }
          theme = semanticColorContextFromThemeContext.gradient.theme;
          const tmp42 = RawColors;
          const tmp46 = _modDef683;
          if (tmp36.color in RawColors) {
            tmp47 = tmp42[tmp36.color];
          } else if (semanticColorContextFromThemeContext != null) {
            tmp47 = semanticColorContextFromThemeContext.gradient.colors[tmp36.color];
          }
          const tmp46Result = tmp46(tmp47);
          let result1 = tmp46Result;
          if ("saturation" in tmp36) {
            result1 = tmp46Result.set("hsl.s", tmp36.saturation);
          }
          let result2 = result1;
          if ("lightness" in tmp36) {
            const lightness = tmp36.lightness;
            let tmp50 = lightness;
            if (1 !== num3) {
              tmp50 = lightness;
              if (!(tmp36.color in RawColors)) {
                tmp50 = lightness;
                if (typeof lightness === "number") {
                  tmp50 = lightness;
                  if (!("opacity" in tmp36)) {
                    tmp50 = lightness;
                    if ("dark" === theme ? lightness < 0.5 : lightness > 0.5) {
                      const value = result1.get("hsl.l");
                      tmp50 = clamp01(value + (lightness - value) * num3);
                    }
                  }
                }
              }
            }
            result2 = result1.set("hsl.l", tmp50);
          }
          result = result2.hex();
          let num5 = 1;
          if ("opacity" in tmp36) {
            num5 = tmp36.opacity;
          }
          opacity = num5;
          let tmp53 = 1 !== num3;
          if (tmp53) {
            let str9 = "WHITE_500";
            const color = tmp36.color;
            if ("dark" === theme) {
              str9 = "BLACK_500";
            }
            tmp53 = color === str9;
          }
          if (tmp53) {
            tmp53 = "opacity" in tmp36;
          }
          if (tmp53) {
            tmp53 = !("lightness" in tmp36);
          }
          if (tmp53) {
            opacity = clamp01(tmp36.opacity * num3);
          }
        }
      }
    },
    adjustColorSaturation(result, saturation, generic) {
      const obj = transforms;
      return obj.transformColorForReducedSaturation(result, generic, saturation);
    },
    adjustColorContrast(result, contrast, category, theme) {
      const transformColorContrast = transforms.transformColorContrast;
      if (set.has(theme)) {
        return transformColorContrast(result, category, theme, contrast);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Invalid theme: " + theme);
        throw error;
      }
    }
  }
};
let result = size.fileFinishedImporting("../discord_common/js/packages/tokens/native.tsx");

export default obj;
export const Theme = ThemeTypes.ThemeTypes;
export const RawColor = RawColors;
export const SemanticColor = SemanticColors;
export const Shadow = Shadows;
