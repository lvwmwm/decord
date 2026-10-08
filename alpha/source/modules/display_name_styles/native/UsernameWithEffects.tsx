// Module ID: 10246
// Function ID: 10247
// Name: UsernameWithEffects
// Dependencies: [109, 19, 17, 1407, 21, 1408, 5090, 587, 1382, 558, 576, 10247, 5624, 5625, 8825, 4778, 10248, 1406, 5086, 5096, 4781, 10251, 1387, 2]

// Module 10246 (UsernameWithEffects)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1406 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1407 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1408 */;
import useToken2 from "useToken" /* 4778 */;
import getNodeText from "getNodeText" /* 4781 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 5096 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 5624 */;
import useDisplayNameStylesEnabled from "useDisplayNameStylesEnabled" /* 5625 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 8825 */;
import types from "types" /* 10247 */;
import useDisplayNameStylesAccessibleColors from "useDisplayNameStylesAccessibleColors" /* 10248 */;
import PerLetterEffectDefault from "PerLetterEffect" /* 10251 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_3 = ["userId", "guildId", "userName", "effectDisplayType", "pendingDisplayNameStyles", "defaultColor", "containerStyle", "ignoreDisabledStylesSetting"];
({ View: metroRequire, processColor: metroImportDefault, PixelRatio: metroImportAll, StyleSheet: c9 } = react_native);
const MIN_PRISM_GRADIENT_WIDTH = DisplayNameStylesConstants.MIN_PRISM_GRADIENT_WIDTH;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = { [DisplayNameEffect.DisplayNameEffect.NEON]: 1, [DisplayNameEffect.DisplayNameEffect.TOON]: 1.6, [DisplayNameEffect.DisplayNameEffect.POP]: 1.2 };
let closure_14 = createStyles.createStyles((textShadowColor, arg1) => {
  let items;
  let num2;
  let num3;
  let num6;
  let obj3;
  let obj6;
  let rect1;
  let rect2;
  let rect3;
  let result2;
  let result3;
  let tmp4Result12;
  const result = 0.04 * arg1;
  const sum = 4 + 0.12 * arg1;
  const value = metroImportAll.get();
  const sum1 = closure_13[DisplayNameEffect.DisplayNameEffect.NEON] + 0.04 * arg1;
  const sum2 = closure_13[DisplayNameEffect.DisplayNameEffect.TOON] + 0.04 * arg1;
  const sum3 = closure_13[DisplayNameEffect.DisplayNameEffect.POP] + 0.04 * arg1;
  const result1 = Math.floor(sum2 / 2) / value;
  const obj = { color: nativeDefault.colors.WHITE, textShadowColor, textShadowRadius: sum, textShadowOffset: { width: 0, height: 0 } };
  const obj2 = utils_PlatformUtils;
  if (obj2.isIOS()) {
    const rect = { top: result2, left: result2, padding: sum, marginVertical: -sum, marginLeft: -sum, marginRight: -sum - sum1 };
    result2 = -sum1 / 2;
    obj3 = rect;
  } else {
    obj3 = { left: -sum1, paddingRight: sum, marginRight: -sum - sum1 };
  }
  const obj4 = { neon: obj, popContainer: rect1, popBackLayer: rect2, popFrontLayer: { color: nativeDefault.colors.WHITE }, toon: rect3, layoutImpact: { flexShrink: 1, minWidth: 0 } };
  const merged = Object.assign(obj3);
  let num = 0;
  const tmp4Result = utils_PlatformUtils;
  if (tmp4Result.isIOS()) {
    num = -sum3 / 2;
  }
  rect1 = { position: "relative", top: num, left: num2, marginRight: num3 };
  num2 = 0;
  const tmp4Result7 = utils_PlatformUtils;
  if (tmp4Result7.isIOS()) {
    num2 = -sum3 / 2;
  }
  num3 = 0;
  const tmp4Result8 = utils_PlatformUtils;
  if (tmp4Result8.isIOS()) {
    num3 = -sum3;
  }
  rect2 = { color: textShadowColor, position: "absolute", left: 0, right: 0 };
  const tmp4Result9 = utils_PlatformUtils;
  if (tmp4Result9.isIOS()) {
    obj6 = { top: 1.2 + result };
    const obj5 = { top: 1.2 + result };
  } else {
    obj6 = { transform: items };
    items = [{ translateY: 1.2 + result }];
    const obj7 = { translateY: 1.2 + result };
  }
  const merged1 = Object.assign(obj6);
  ({ color: nativeDefault.colors.WHITE });
  rect3 = { color: tmp10(587).colors.WHITE, top: num6, left: result3, marginRight: tmp4Result12.isIOS() ? -sum2 : -result1 };
  num6 = 0;
  const tmp4Result10 = utils_PlatformUtils;
  if (tmp4Result10.isIOS()) {
    num6 = -sum2 / 2;
  }
  const tmp4Result11 = utils_PlatformUtils;
  if (tmp4Result11.isIOS()) {
    result3 = -sum2 / 2;
  } else {
    result3 = -result1;
  }
  tmp4Result12 = utils_PlatformUtils;
  return obj4;
});
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UsernameWithEffects(arg0) {
  let containerStyle;
  let defaultColor;
  let effectDisplayType;
  let guildId;
  let ignoreDisabledStylesSetting;
  let items2;
  let pendingDisplayNameStyles;
  let tmp71;
  let tmp75;
  let userId;
  let userName;
  const obj = react2;
  const cResult = obj.c(92);
  ({ userId, guildId, userName, effectDisplayType, pendingDisplayNameStyles, defaultColor, containerStyle, ignoreDisabledStylesSetting } = arg0);
  const tmp5 = _objectWithoutProperties(arg0, closure_3);
  if (undefined === effectDisplayType) {
    effectDisplayType = tmp2(10247).EffectDisplayType.STATIC;
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === (undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting)) {
      if (cResult[2] === pendingDisplayNameStyles) {
        let tmp7;
        if (cResult[3] === userId) {
          tmp7 = cResult[4];
        }
        const tmp9 = useDisplayNameStylesDefault(tmp7);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { location: "UsernameWithEffects" };
          cResult[5] = obj2;
        }
        useDisplayNameStylesEnabled;
        if (cResult[6] === tmp9) {
          let tmp14;
          let tmp18;
          if (cResult[7] === (undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting)) {
            tmp14 = cResult[8];
          }
          const tmp2Result10 = useDisplayNameStylesFont;
          const displayNameStylesFont = tmp2Result10.useDisplayNameStylesFont(tmp14);
          let num5 = tmp5.lineClamp;
          if (num5 == null) {
            num5 = 1;
          }
          if (cResult[9] !== displayNameStylesFont) {
            let tmp19;
            if (null != displayNameStylesFont) {
              tmp19 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
              const obj3 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
            }
            cResult[9] = displayNameStylesFont;
            cResult[10] = tmp19;
            tmp18 = tmp19;
          } else {
            tmp18 = cResult[10];
          }
          if (cResult[11] === displayNameStylesFont) {
            if (cResult[12] === tmp18) {
              let tmp20;
              if (cResult[13] === num5 > 1) {
                tmp20 = cResult[14];
              }
              const tmp2Result11 = useToken2;
              const token = tmp2Result11.useToken(tmp8(587).colors.BACKGROUND_BASE_LOW);
              const useToken = useToken2.useToken;
              useToken2;
              if (cResult[15] === token) {
                let tmp27;
                if (cResult[16] === tmp9) {
                  tmp27 = cResult[17];
                }
                const tmp2Result13 = useDisplayNameStylesAccessibleColors;
                const displayNameStylesAccessibleColors = tmp2Result13.useDisplayNameStylesAccessibleColors(tmp27);
                let first;
                if (displayNameStylesAccessibleColors.length > 0) {
                  first = displayNameStylesAccessibleColors[0];
                }
                let effectId;
                if (tmp9 != null) {
                  effectId = tmp9.effectId;
                }
                if (effectId == null) {
                  effectId = tmp2(1408).DisplayNameEffect.SOLID;
                }
                let colorVariants = null;
                if (null != first) {
                  const tmp2Result14 = DisplayNameStylesUtils;
                  colorVariants = tmp2Result14.generateColorVariants(first);
                }
                const TextStyleSheet = tmp2(5086).TextStyleSheet;
                const tmp2Result15 = useTypographyVariantRemap;
                const tmp31 = TextStyleSheet[tmp2Result15.useTypographyVariantRemap(tmp2Result15, tmp5.variant, false)];
                const flattenResult = React4.flatten(tmp5.style);
                let num17;
                if (flattenResult != null) {
                  num17 = flattenResult.fontSize;
                }
                if (num17 == null) {
                  let fontSize;
                  if (tmp31 != null) {
                    fontSize = tmp31.fontSize;
                  }
                  num17 = fontSize;
                }
                if (num17 == null) {
                  num17 = 16;
                }
                let lineHeight;
                if (flattenResult != null) {
                  lineHeight = flattenResult.lineHeight;
                }
                if (lineHeight == null) {
                  let lineHeight1;
                  if (tmp31 != null) {
                    lineHeight1 = tmp31.lineHeight;
                  }
                  lineHeight = lineHeight1;
                }
                if (lineHeight == null) {
                  lineHeight = 1.25 * num17;
                }
                const tmp2Result16 = getNodeText;
                const nodeText = tmp2Result16.getNodeText(userName);
                let num19;
                if (nodeText != null) {
                  num19 = nodeText.length;
                }
                if (num19 == null) {
                  num19 = 10;
                }
                const result = num19 * num17 * 0.6;
                if (cResult[18] === closure_13[effectId]) {
                  let tmp40;
                  if (cResult[19] === num17) {
                    tmp40 = cResult[20];
                  }
                  let str2;
                  const tmp42 = closure_14;
                  if (colorVariants != null) {
                    str2 = colorVariants.main;
                  }
                  if (str2 == null) {
                    str2 = "";
                  }
                  const tmp42Result = tmp42(str2, num17);
                  if (tmp13) {
                    if (null != tmp9) {
                      if (effectDisplayType !== types.EffectDisplayType.PLAIN) {
                        if (null != colorVariants) {
                          if (cResult[33] === tmp20) {
                            let tmp44;
                            if (cResult[34] === tmp5) {
                              tmp44 = cResult[35];
                            }
                            if (cResult[36] === effectId) {
                              let tmp45;
                              if (cResult[37] === tmp42Result) {
                                tmp45 = cResult[38];
                              }
                              if (effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
                                let tmp95;
                                if (cResult[39] !== userName) {
                                  const tmp2Result17 = getNodeText;
                                  let str4 = tmp2Result17.getNodeText(userName);
                                  if (str4 == null) {
                                    str4 = "";
                                  }
                                  cResult[39] = userName;
                                  cResult[40] = str4;
                                  tmp95 = str4;
                                } else {
                                  tmp95 = cResult[40];
                                }
                                if (cResult[41] === containerStyle) {
                                  let tmp96;
                                  if (cResult[42] === tmp45) {
                                    tmp96 = cResult[43];
                                  }
                                  if (cResult[44] === result) {
                                    let tmp97;
                                    if (cResult[45] === tmp5) {
                                      tmp97 = cResult[46];
                                    }
                                    if (cResult[47] === displayNameStylesAccessibleColors) {
                                      if (cResult[48] === tmp95) {
                                        if (cResult[49] === tmp96) {
                                          if (cResult[50] === tmp97) {
                                            let tmp101;
                                            if (cResult[51] === tmp44) {
                                              tmp101 = cResult[52];
                                            }
                                            return tmp101;
                                          }
                                        }
                                      }
                                    }
                                    const obj4 = { name: tmp95, containerStyle: tmp96, textStyle: tmp44, textProps: tmp97, colors: displayNameStylesAccessibleColors };
                                    const tmp103 = unpackModuleId(PerLetterEffectDefault, obj4);
                                    cResult[47] = displayNameStylesAccessibleColors;
                                    cResult[48] = tmp95;
                                    cResult[49] = tmp96;
                                    cResult[50] = tmp97;
                                    cResult[51] = tmp44;
                                    cResult[52] = tmp103;
                                    tmp101 = tmp103;
                                  }
                                  const obj5 = { gradientColors: undefined, gradientLength: result, gradientMode: "clamp", gradientAngle: undefined, textStrokeWidth: undefined, textStrokeColor: undefined };
                                  const merged = Object.assign(tmp5);
                                  cResult[44] = result;
                                  cResult[45] = tmp5;
                                  cResult[46] = obj5;
                                  tmp97 = obj5;
                                }
                                const items = [tmp45, containerStyle];
                                cResult[41] = containerStyle;
                                cResult[42] = tmp45;
                                cResult[43] = items;
                                tmp96 = items;
                              } else {
                                let tmp52;
                                let num35;
                                let tmp49;
                                let tmp48;
                                let tmp81;
                                if (DisplayNameEffect.DisplayNameEffect.GRADIENT !== effectId) {
                                  let tmp50;
                                  let tmp51;
                                  if (DisplayNameEffect.DisplayNameEffect.PRISM !== effectId) {
                                    if (DisplayNameEffect.DisplayNameEffect.NEON === effectId) {
                                      let tmp79;
                                      let neonStroke;
                                      const tmp76 = metroImportDefault;
                                      if (colorVariants != null) {
                                        neonStroke = colorVariants.neonStroke;
                                      }
                                      const tmp76Result = tmp76(neonStroke);
                                      if (null != tmp76Result) {
                                        tmp79 = tmp76Result;
                                      }
                                      if (cResult[60] === tmp45) {
                                        if (cResult[61] === tmp42Result.neon) {
                                          let tmp80;
                                          if (cResult[62] === tmp44) {
                                            tmp80 = cResult[63];
                                          }
                                          tmp48 = tmp80;
                                          tmp49 = result;
                                          tmp50 = tmp79;
                                          tmp51 = tmp40;
                                        }
                                      }
                                      const items1 = [tmp44, tmp42Result.neon, tmp45];
                                      cResult[60] = tmp45;
                                      cResult[61] = tmp42Result.neon;
                                      cResult[62] = tmp44;
                                      cResult[63] = items1;
                                      tmp80 = items1;
                                    } else if (DisplayNameEffect.DisplayNameEffect.POP === effectId) {
                                      let dark2;
                                      if (colorVariants != null) {
                                        dark2 = colorVariants.dark2;
                                      }
                                      const tmp57Result = metroImportDefault(dark2);
                                      let main;
                                      if (colorVariants != null) {
                                        main = colorVariants.main;
                                      }
                                      const tmp57Result2 = metroImportDefault(main);
                                      tmp49 = result;
                                      tmp48 = tmp44;
                                      if (null != colorVariants) {
                                        if (cResult[64] === containerStyle) {
                                          if (cResult[65] === tmp45) {
                                            let tmp62;
                                            if (cResult[66] === tmp42Result.popContainer) {
                                              tmp62 = cResult[67];
                                            }
                                            if (cResult[68] === tmp42Result.popBackLayer) {
                                              let tmp63;
                                              if (cResult[69] === tmp44) {
                                                tmp63 = cResult[70];
                                              }
                                              if (cResult[71] === tmp42Result.popFrontLayer) {
                                                let tmp64;
                                                if (cResult[72] === tmp44) {
                                                  tmp64 = cResult[73];
                                                }
                                                const obj6 = { style: tmp62, children: items2 };
                                                const obj7 = { textStrokeWidth: tmp40, textStrokeColor: tmp71, style: tmp63, children: userName };
                                                const Text = tmp2(5086).Text;
                                                const merged1 = Object.assign(tmp5);
                                                tmp71 = undefined;
                                                const tmp65 = closure_12;
                                                const tmp66 = metroRequire;
                                                if (null != tmp57Result2) {
                                                  tmp71 = tmp57Result2;
                                                }
                                                items2 = [unpackModuleId(Text, obj7), ];
                                                const obj8 = { textStrokeWidth: tmp40, textStrokeColor: tmp75, style: tmp64, children: userName };
                                                const Text2 = tmp2(5086).Text;
                                                const merged2 = Object.assign(tmp5);
                                                tmp75 = undefined;
                                                if (null != tmp57Result) {
                                                  tmp75 = tmp57Result;
                                                }
                                                items2[1] = unpackModuleId(Text2, obj8);
                                                return tmp65(tmp66, obj6);
                                              }
                                              const items3 = [tmp44, tmp42Result.popFrontLayer];
                                              cResult[71] = tmp42Result.popFrontLayer;
                                              cResult[72] = tmp44;
                                              cResult[73] = items3;
                                              tmp64 = items3;
                                            }
                                            const items4 = [tmp44, tmp42Result.popBackLayer];
                                            cResult[68] = tmp42Result.popBackLayer;
                                            cResult[69] = tmp44;
                                            cResult[70] = items4;
                                            tmp63 = items4;
                                          }
                                        }
                                        const items5 = [tmp42Result.popContainer, tmp45, containerStyle];
                                        cResult[64] = containerStyle;
                                        cResult[65] = tmp45;
                                        cResult[66] = tmp42Result.popContainer;
                                        cResult[67] = items5;
                                        tmp62 = items5;
                                      }
                                    } else if (DisplayNameEffect.DisplayNameEffect.TOON === effectId) {
                                      if (cResult[74] === tmp45) {
                                        if (cResult[75] === tmp42Result.toon) {
                                          let tmp53;
                                          if (cResult[76] === tmp44) {
                                            tmp53 = cResult[77];
                                          }
                                          const items6 = [metroImportDefault(tmp26), metroImportDefault(colorVariants.light2), metroImportDefault(colorVariants.light1), metroImportDefault(colorVariants.main)];
                                          const tmp55 = metroImportDefault(colorVariants.toonStroke);
                                          let tmp56;
                                          if (null != tmp55) {
                                            tmp56 = tmp55;
                                          }
                                          num35 = 90;
                                          tmp50 = tmp56;
                                          tmp49 = lineHeight;
                                          tmp51 = tmp40;
                                          tmp52 = items6;
                                          tmp48 = tmp53;
                                        }
                                      }
                                      const items7 = [tmp44, tmp42Result.toon, tmp45];
                                      cResult[74] = tmp45;
                                      cResult[75] = tmp42Result.toon;
                                      cResult[76] = tmp44;
                                      cResult[77] = items7;
                                      tmp53 = items7;
                                    } else {
                                      let tmp47;
                                      const SOLID = tmp2(1408).DisplayNameEffect.SOLID;
                                      if (cResult[78] !== first) {
                                        const obj9 = { color: first };
                                        cResult[78] = first;
                                        cResult[79] = obj9;
                                        tmp47 = obj9;
                                      } else {
                                        tmp47 = cResult[79];
                                      }
                                      if (cResult[80] === tmp47) {
                                        if (cResult[81] === tmp44) {
                                          tmp48 = cResult[82];
                                        }
                                        tmp49 = result;
                                      }
                                      const items8 = [tmp44, tmp47];
                                      cResult[80] = tmp47;
                                      cResult[81] = tmp44;
                                      cResult[82] = items8;
                                      tmp48 = items8;
                                    }
                                  }
                                  if (cResult[83] === num35) {
                                    if (cResult[84] === tmp52) {
                                      if (cResult[85] === tmp49) {
                                        if (cResult[86] === tmp50) {
                                          if (cResult[87] === tmp5) {
                                            if (cResult[88] === tmp51) {
                                              if (cResult[89] === tmp48) {
                                                let tmp89;
                                                if (cResult[90] === userName) {
                                                  tmp89 = cResult[91];
                                                }
                                                return tmp89;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj10 = { gradientColors: tmp52, gradientLength: tmp49, gradientMode: "clamp", style: tmp48, gradientAngle: num35, textStrokeWidth: tmp51, textStrokeColor: tmp50, children: userName };
                                  const Text3 = tmp2(5086).Text;
                                  const merged3 = Object.assign(tmp5);
                                  const tmp94 = unpackModuleId(Text3, obj10);
                                  cResult[83] = num35;
                                  cResult[84] = tmp52;
                                  cResult[85] = tmp49;
                                  cResult[86] = tmp50;
                                  cResult[87] = tmp5;
                                  cResult[88] = tmp51;
                                  cResult[89] = tmp48;
                                  cResult[90] = userName;
                                  cResult[91] = tmp94;
                                  tmp89 = tmp94;
                                }
                                if (cResult[53] === displayNameStylesAccessibleColors) {
                                  if (cResult[54] === effectId) {
                                    if (cResult[55] === result) {
                                      tmp52 = cResult[56];
                                      num35 = cResult[57];
                                      tmp49 = cResult[58];
                                      tmp48 = tmp44;
                                    }
                                  }
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
                                  class Ne {
                                    constructor(arg0) {
                                      return closure_1_7(arg0);
                                    }
                                  }
                                  cResult[59] = Ne;
                                  tmp81 = Ne;
                                } else {
                                  class Ne {
                                    constructor(arg0) {
                                      return closure_1_7(arg0);
                                    }
                                  }
                                }
                                const mapped = displayNameStylesAccessibleColors.map(tmp81);
                                const found = mapped.filter(tmp2(1387).isNotNullish);
                                if (effectId === DisplayNameEffect.DisplayNameEffect.PRISM) {
                                  class Ne {
                                    constructor(arg0) {
                                      return closure_1_7(arg0);
                                    }
                                  }
                                }
                                let bound = result;
                                let tmp83 = found;
                                if (effectId === DisplayNameEffect.DisplayNameEffect.PRISM) {
                                  let tmp84;
                                  class Ne {
                                    constructor(arg0) {
                                      return closure_1_7(arg0);
                                    }
                                  }
                                  if (found.length > 0) {
                                    class Ne {
                                      constructor(arg0) {
                                        return closure_1_7(arg0);
                                      }
                                    }
                                    tmp85[HermesBuiltin.arraySpread(tmp85, found, 0)] = found[0];
                                    tmp84 = tmp85;
                                  }
                                  const _Math = Math;
                                  bound = Math.max(result, MIN_PRISM_GRADIENT_WIDTH);
                                  tmp83 = tmp84;
                                }
                                cResult[53] = displayNameStylesAccessibleColors;
                                cResult[54] = effectId;
                                cResult[55] = result;
                                cResult[56] = tmp83;
                                cResult[57] = 45;
                                cResult[58] = bound;
                                tmp49 = bound;
                                tmp52 = tmp83;
                                num35 = num55;
                                tmp48 = tmp44;
                              }
                            }
                            const tmp2Result18 = DisplayNameStylesUtils;
                            if (tmp2Result18.doesEffectImpactLayout(effectId)) {
                              class Ne {
                                constructor(arg0) {
                                  return closure_1_7(arg0);
                                }
                              }
                            }
                            cResult[36] = effectId;
                            cResult[37] = tmp42Result;
                            cResult[38] = undefined;
                            tmp45 = tmp46;
                          }
                          const items9 = [tmp5.style, tmp20];
                          cResult[33] = tmp20;
                          cResult[34] = tmp5;
                          cResult[35] = items9;
                          tmp44 = items9;
                        }
                      }
                      if (cResult[25] === tmp18) {
                        class Ne {
                          constructor(arg0) {
                            return closure_1_7(arg0);
                          }
                        }
                        if (cResult[28] === defaultColor) {
                          class Ne {
                            constructor(arg0) {
                              return closure_1_7(arg0);
                            }
                          }
                        }
                        const obj11 = { style: tmp104, color: defaultColor, children: userName };
                        const Text4 = tmp2(5086).Text;
                        const merged4 = Object.assign(tmp5);
                        cResult[28] = defaultColor;
                        cResult[29] = tmp104;
                        cResult[30] = tmp5;
                        cResult[31] = userName;
                        cResult[32] = unpackModuleId(Text4, obj11);
                        const tmp110 = unpackModuleId(Text4, obj11);
                      }
                      const items10 = [tmp5.style, tmp18];
                      cResult[25] = tmp18;
                      cResult[26] = tmp5;
                      cResult[27] = items10;
                    }
                  } else {
                    class Ne {
                      constructor(arg0) {
                        return closure_1_7(arg0);
                      }
                    }
                  }
                  if (cResult[21] === defaultColor) {
                    class Ne {
                      constructor(arg0) {
                        return closure_1_7(arg0);
                      }
                    }
                  }
                  const obj12 = { color: defaultColor, children: userName };
                  const Text5 = tmp2(5086).Text;
                  const merged5 = Object.assign(tmp5);
                  cResult[21] = defaultColor;
                  cResult[22] = tmp5;
                  cResult[23] = userName;
                  cResult[24] = unpackModuleId(Text5, obj12);
                  const tmp116 = unpackModuleId(Text5, obj12);
                }
                let sum;
                if (null != closure_13[effectId]) {
                  class Ne {
                    constructor(arg0) {
                      return closure_1_7(arg0);
                    }
                  }
                  sum = tmp39 + 0.04 * num17;
                }
                cResult[18] = closure_13[effectId];
                cResult[19] = num17;
                cResult[20] = sum;
                tmp40 = sum;
              }
              const obj13 = { displayNameStyles: tmp9, backgroundColor: token };
              cResult[15] = token;
              cResult[16] = tmp9;
              cResult[17] = obj13;
              tmp27 = obj13;
            }
          }
          let tmp21 = tmp18;
          if (num5 <= 1) {
            let tmp22;
            class Ne {
              constructor(arg0) {
                return closure_1_7(arg0);
              }
            }
            if (null != displayNameStylesFont) {
              class Ne {
                constructor(arg0) {
                  return closure_1_7(arg0);
                }
              }
              tmp23[0] = displayNameStylesFont;
              tmp22 = tmp23;
            }
            tmp21 = tmp22;
          }
          cResult[11] = displayNameStylesFont;
          cResult[12] = tmp18;
          cResult[13] = num5 > 1;
          cResult[14] = tmp21;
          tmp20 = tmp21;
        }
        const obj14 = { displayNameStyles: tmp9, ignoreDisabledStylesSetting: undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting };
        cResult[6] = tmp9;
        cResult[7] = undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting;
        cResult[8] = obj14;
        tmp14 = obj14;
      }
    }
  }
  const obj15 = { userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting };
  cResult[0] = guildId;
  cResult[1] = undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting;
  cResult[2] = pendingDisplayNameStyles;
  cResult[3] = userId;
  cResult[4] = obj15;
  tmp7 = obj15;
}) : (function UsernameWithEffects(userName) {
  let containerStyle;
  let defaultColor;
  let guildId;
  let ignoreDisabledStylesSetting;
  let items12;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj6;
  let pendingDisplayNameStyles;
  let sum;
  let tmp47;
  let tmp51;
  let userId;
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(10247).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(userName, Object.assign({ userId: 0, guildId: 0, userName: 0, effectDisplayType: 0, pendingDisplayNameStyles: 0, defaultColor: 0, containerStyle: 0, ignoreDisabledStylesSetting: 0 }));
  let num2;
  const tmp7 = num2(5624)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  let obj = userName(5625);
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  const obj2 = userName(8825);
  const displayNameStylesFont = obj2.useDisplayNameStylesFont({ displayNameStyles: tmp7, ignoreDisabledStylesSetting });
  let tmp11;
  if (null != displayNameStylesFont) {
    tmp11 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
    const obj3 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
  }
  let num = merged.lineClamp;
  if (num == null) {
    num = 1;
  }
  let tmp12 = tmp11;
  if (num <= 1) {
    let tmp13;
    if (null != displayNameStylesFont) {
      tmp13 = { fontFamily: displayNameStylesFont };
      const obj4 = { fontFamily: displayNameStylesFont };
    }
    tmp12 = tmp13;
  }
  const tmp8Result = userName(4778);
  const token = tmp8Result.useToken(tmp5(587).colors.BACKGROUND_BASE_LOW);
  const tmp8Result7 = userName(4778);
  const token1 = tmp8Result7.useToken(tmp5(587).colors.WHITE);
  const tmp8Result8 = userName(10248);
  const displayNameStylesAccessibleColors = tmp8Result8.useDisplayNameStylesAccessibleColors({ displayNameStyles: tmp7, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (tmp7 != null) {
    effectId = tmp7.effectId;
  }
  if (effectId == null) {
    effectId = tmp8(1408).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    const tmp8Result9 = userName(1406);
    colorVariants = tmp8Result9.generateColorVariants(first);
  }
  const TextStyleSheet = tmp8(5086).TextStyleSheet;
  const tmp8Result10 = userName(5096);
  const tmp19 = TextStyleSheet[tmp8Result10.useTypographyVariantRemap(tmp8Result10, merged.variant, false)];
  const flattenResult = closure_9.flatten(merged.style);
  num2 = undefined;
  if (flattenResult != null) {
    num2 = flattenResult.fontSize;
  }
  if (num2 == null) {
    let fontSize;
    if (tmp19 != null) {
      fontSize = tmp19.fontSize;
    }
    num2 = fontSize;
  }
  if (num2 == null) {
    num2 = 16;
  }
  let lineHeight;
  if (flattenResult != null) {
    lineHeight = flattenResult.lineHeight;
  }
  if (lineHeight == null) {
    let lineHeight1;
    if (tmp19 != null) {
      lineHeight1 = tmp19.lineHeight;
    }
    lineHeight = lineHeight1;
  }
  if (lineHeight == null) {
    lineHeight = 1.25 * num2;
  }
  const items = [userName, num2];
  const memo = react.useMemo(() => {
    const obj = getNodeText;
    const nodeText = obj.getNodeText(userName);
    let num;
    if (nodeText != null) {
      num = nodeText.length;
    }
    if (num == null) {
      num = 10;
    }
    return num * num2 * 0.6;
  }, items);
  if (null != closure_13[effectId]) {
    sum = tmp25 + 0.04 * num2;
  }
  let str;
  const tmp27 = closure_14;
  if (colorVariants != null) {
    str = colorVariants.main;
  }
  if (str == null) {
    str = "";
  }
  const tmp27Result = tmp27(str, num2);
  if (displayNameStylesEnabled) {
    if (null != tmp7) {
      if (STATIC !== userName(10247).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          let layoutImpact;
          const items1 = [merged.style, tmp12];
          const tmp8Result11 = userName(1406);
          if (tmp8Result11.doesEffectImpactLayout(effectId)) {
            layoutImpact = tmp27Result.layoutImpact;
          }
          if (effectId === userName(1408).DisplayNameEffect.GUMMY) {
            const tmp5Result = num2(10251);
            const tmp8Result12 = userName(4781);
            let str3 = tmp8Result12.getNodeText(userName);
            const tmp65 = closure_11;
            if (str3 == null) {
              str3 = "";
            }
            const obj5 = { name: str3, containerStyle: items2, textStyle: items1, textProps: obj6, colors: displayNameStylesAccessibleColors };
            items2 = [layoutImpact, containerStyle];
            obj6 = { gradientColors: undefined, gradientLength: memo, gradientMode: "clamp", gradientAngle: undefined, textStrokeWidth: undefined, textStrokeColor: undefined };
            const merged1 = Object.assign(merged);
            return tmp65(tmp5Result, obj5);
          } else {
            let bound;
            let tmp32;
            let items10;
            let num5;
            if (userName(1408).DisplayNameEffect.GRADIENT !== effectId) {
              let tmp30;
              let tmp31;
              if (userName(1408).DisplayNameEffect.PRISM !== effectId) {
                if (userName(1408).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  const tmp52 = closure_7;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp52Result = tmp52(neonStroke);
                  let tmp55;
                  if (null != tmp52Result) {
                    tmp55 = tmp52Result;
                  }
                  const items3 = [items1, tmp27Result.neon, layoutImpact];
                  tmp30 = tmp55;
                  bound = memo;
                  items10 = items3;
                  tmp31 = sum;
                } else if (userName(1408).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  const tmp36Result = closure_7(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  const tmp36Result2 = closure_7(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    const obj7 = { style: items4, children: items6 };
                    items4 = [tmp27Result.popContainer, layoutImpact, containerStyle];
                    const obj8 = { textStrokeWidth: sum, textStrokeColor: tmp47, style: items5, children: userName };
                    const Text = tmp8(5086).Text;
                    const merged2 = Object.assign(merged);
                    tmp47 = undefined;
                    const tmp41 = closure_12;
                    const tmp42 = closure_6;
                    if (null != tmp36Result2) {
                      tmp47 = tmp36Result2;
                    }
                    items5 = [items1, tmp27Result.popBackLayer];
                    items6 = [closure_11(Text, obj8), ];
                    const obj9 = { textStrokeWidth: sum, textStrokeColor: tmp51, style: items7, children: userName };
                    const Text2 = tmp8(5086).Text;
                    const merged3 = Object.assign(merged);
                    tmp51 = undefined;
                    if (null != tmp36Result) {
                      tmp51 = tmp36Result;
                    }
                    items7 = [items1, tmp27Result.popFrontLayer];
                    items6[1] = closure_11(Text2, obj9);
                    return tmp41(tmp42, obj7);
                  }
                } else if (userName(1408).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp27Result.toon, layoutImpact];
                  const items9 = [closure_7(token1), closure_7(colorVariants.light2), closure_7(colorVariants.light1), closure_7(colorVariants.main)];
                  const tmp34 = closure_7(colorVariants.toonStroke);
                  let tmp35;
                  if (null != tmp34) {
                    tmp35 = tmp34;
                  }
                  num5 = 90;
                  tmp30 = tmp35;
                  bound = lineHeight;
                  items10 = items8;
                  tmp31 = sum;
                  tmp32 = items9;
                } else {
                  const SOLID = tmp8(1408).DisplayNameEffect.SOLID;
                  items10 = [items1, ];
                  const obj10 = { color: first };
                  items10[1] = obj10;
                  bound = memo;
                }
              }
              const obj11 = { gradientColors: tmp32, gradientLength: bound, gradientMode: "clamp", style: items10, gradientAngle: num5, textStrokeWidth: tmp31, textStrokeColor: tmp30, children: userName };
              const Text3 = tmp8(5086).Text;
              const merged4 = Object.assign(merged);
              return closure_11(Text3, obj11);
            }
            const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_7(item));
            const found = mapped.filter(tmp8(1387).isNotNullish);
            let num6 = 45;
            if (effectId === userName(1408).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp32 = found;
            if (effectId === userName(1408).DisplayNameEffect.PRISM) {
              let tmp56 = found;
              if (found.length > 0) {
                const items11 = [];
                items11[HermesBuiltin.arraySpread(items11, found, 0)] = found[0];
                tmp56 = items11;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp32 = tmp56;
              items10 = items1;
              num5 = num6;
            }
          }
        }
      }
      const obj12 = { style: items12, color: defaultColor, children: userName };
      const Text4 = tmp8(5086).Text;
      const merged5 = Object.assign(merged);
      items12 = [merged.style, tmp11];
      return closure_11(Text4, obj12);
    }
  }
  const obj13 = { color: defaultColor, children: userName };
  const Text5 = tmp8(5086).Text;
  const merged6 = Object.assign(merged);
  return closure_11(Text5, obj13);
}));
let result = size.fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default memoResult;
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;
