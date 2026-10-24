// Module ID: 9849
// Function ID: 9850
// Name: Coachmark
// Dependencies: [109, 32, 19, 17, 1087, 21, 5052, 4971, 587, 558, 576, 9844, 5251, 9850, 5669, 5971, 5234, 5244, 1128, 6931, 8913, 9851, 1384, 5037, 2]

// Module 9849 (Coachmark)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import native from "native" /* 5037 */;
import FastImageDefault from "FastImage" /* 5669 */;
import react_native from "react-native" /* 5971 */;
import Graphic2 from "Graphic" /* 9850 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let Pressable;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
let unpackModuleId;
let closure_3 = ["style"];
let closure_4 = ["style"];
({ View: metroImportAll, Pressable } = react_native2);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", alignItems: "center" }, shadow: obj2, body: obj3, textGap: { gap: 4 }, textOnlyPadding: obj4, bodyBgColor: obj5, gradient: obj6, bodyContainer: obj7, center: { alignItems: "center", justifyContent: "center" }, buttonSpacing: obj8, text: { maxWidth: 200, textAlign: "center" }, cursorContainer: { alignItems: "center", zIndex: 0 }, cursorHead: size, cursorSpine: size1, image: { height: 40, width: 40 }, bottomMargin: obj9, closeButton: rect };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_BUTTON_OVERLAY);
obj3 = { width: nativeDefault.modules.mobile.COACHMARK_BODY_WIDTH, borderRadius: nativeDefault.radii.lg, overflow: "hidden", zIndex: 1 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_24 };
obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
obj6 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj7 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj8 = { height: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
size = { height: 8, width: 8, borderRadius: nativeDefault.radii.xs, borderWidth: 2, backgroundColor: "transparent", borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
size1 = { width: 2, height: 16, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj9 = { marginBottom: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
rect = { position: "absolute", top: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING, right: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
let closure_15 = createStyles(obj);
let closure_16 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function Coachmark(arg0) {
  let adjustmentX;
  let buttonIcon;
  let buttonLabel;
  let buttonShiny;
  let buttonVariant;
  let description;
  let enterExitAnimatedStyles;
  let experimental_withBlurBackground;
  let gradientColor;
  let graphic;
  let imgSource;
  let items;
  let items10;
  let items5;
  let items6;
  let items7;
  let items9;
  let offsetY;
  let onButtonPress;
  let onDismiss;
  let position;
  let ref;
  let renderImgComponent;
  let sharedValue;
  let surfaceMeasurements;
  let targetMeasurements;
  let title;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp27;
  let tmp41;
  let tmp7;
  let tooltipX;
  let tooltipY;
  let obj = ref(sharedValue[10]);
  const cResult = obj.c(102);
  ({ targetMeasurements, surfaceMeasurements, title, description, offsetY, graphic, imgSource, position, onDismiss, buttonLabel, buttonVariant, buttonIcon, buttonShiny, onButtonPress, gradientColor, experimental_withBlurBackground, renderImgComponent, enterExitAnimatedStyles } = arg0);
  let num = 0;
  if (undefined !== offsetY) {
    num = offsetY;
  }
  const tmp4 = closure_15();
  ref = react.useRef(null);
  [tmp7, importDefault] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  ({ adjustmentX, tooltipX, tooltipY } = require("useTooltipPosition")(tmp7, surfaceMeasurements, targetMeasurements, position, -8 + num));
  require("useTooltipPosition")(tmp7, surfaceMeasurements, targetMeasurements, position, -8 + num);
  const tmpResult = ref(sharedValue[6]);
  sharedValue = tmpResult.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function c() {
      const result = sharedValue.set(1);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== sharedValue) {
    function ee() {
      const result = sharedValue.set(0);
    }
    cResult[2] = sharedValue;
    cResult[3] = ee;
    tmp12 = ee;
  } else {
    tmp12 = cResult[3];
  }
  const tmpResult4 = ref(sharedValue[12]);
  const buttonPressAnimationProps = tmpResult4.useButtonPressAnimationProps(sharedValue);
  if (cResult[4] !== buttonPressAnimationProps) {
    const style = buttonPressAnimationProps.style;
    const tmp18 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
    cResult[4] = buttonPressAnimationProps;
    cResult[5] = tmp18;
    cResult[6] = style;
    tmp15 = style;
    tmp14 = tmp18;
  } else {
    tmp14 = cResult[5];
    tmp15 = cResult[6];
  }
  if (null == graphic) {
    let tmp31 = null;
    if (null != renderImgComponent) {
      let tmp32;
      if (cResult[15] !== renderImgComponent) {
        const renderImgComponentResult = renderImgComponent();
        cResult[15] = renderImgComponent;
        cResult[16] = renderImgComponentResult;
        tmp32 = renderImgComponentResult;
      } else {
        tmp32 = cResult[16];
      }
      tmp31 = tmp32;
    }
    if (null != imgSource) {
      if (cResult[17] === imgSource) {
        let tmp34;
        if (cResult[18] === tmp4.image) {
          tmp34 = cResult[19];
        }
        tmp31 = tmp34;
      }
      let obj2 = { source: imgSource, style: tmp4.image };
      const tmp36 = closure_11(require("FastImage"), obj2);
      cResult[17] = imgSource;
      cResult[18] = tmp4.image;
      cResult[19] = tmp36;
      tmp34 = tmp36;
    }
    tmp27 = null;
    if (null != tmp31) {
      if (cResult[20] === tmp31) {
        let tmp37;
        if (cResult[21] === tmp4.bottomMargin) {
          tmp37 = cResult[22];
        }
        tmp27 = tmp37;
      }
      const obj3 = { style: tmp4.bottomMargin, children: tmp31 };
      const tmp40 = closure_11(closure_8, obj3);
      cResult[20] = tmp31;
      cResult[21] = tmp4.bottomMargin;
      cResult[22] = tmp40;
      tmp37 = tmp40;
    }
  } else {
    let tmp20;
    let str = graphic.aspectRatio;
    if (str == null) {
      str = "1/1";
    }
    if (cResult[7] !== closure_16[str]) {
      size = { height: tmp112[str], width: "auto" };
      cResult[7] = closure_16[str];
      cResult[8] = size;
      tmp20 = size;
    } else {
      tmp20 = cResult[8];
    }
    if (cResult[9] === graphic) {
      let tmp21;
      if (cResult[10] === tmp20) {
        tmp21 = cResult[11];
      }
      if (cResult[12] === tmp4.bottomMargin) {
        if (cResult[13] === tmp21) {
          tmp27 = cResult[14];
        }
      }
      const obj4 = { style: tmp4.bottomMargin, children: tmp21 };
      const tmp30 = closure_11(closure_8, obj4);
      cResult[12] = tmp4.bottomMargin;
      cResult[13] = tmp21;
      cResult[14] = tmp30;
      tmp27 = tmp30;
    }
    const obj5 = { style: tmp20 };
    const Graphic = tmp(tmp2[13]).Graphic;
    const merged = Object.assign(graphic);
    const tmp26 = closure_11(Graphic, obj5);
    cResult[9] = graphic;
    cResult[10] = tmp20;
    cResult[11] = tmp26;
    tmp21 = tmp26;
  }
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    function be() {
      const obj = react_native;
      const obj2 = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj2);
    }
    cResult[23] = be;
    tmp41 = be;
  } else {
    tmp41 = cResult[23];
  }
  let textOnlyPadding;
  if (null == graphic) {
    textOnlyPadding = tmp4.textOnlyPadding;
  }
  if (cResult[24] === tmp4.text) {
    let tmp43;
    if (cResult[25] === textOnlyPadding) {
      tmp43 = cResult[26];
    }
    if (cResult[27] === tmp43) {
      let tmp44;
      if (cResult[28] === title) {
        tmp44 = cResult[29];
      }
      if (cResult[30] === description) {
        let tmp47;
        if (cResult[31] === tmp4.text) {
          tmp47 = cResult[32];
        }
        if (cResult[33] === tmp4.textGap) {
          if (cResult[34] === tmp44) {
            let tmp50;
            if (cResult[35] === tmp47) {
              tmp50 = cResult[36];
            }
            if (cResult[37] === tmp27) {
              if (cResult[38] === tmp4.center) {
                let tmp54;
                if (cResult[39] === tmp50) {
                  tmp54 = cResult[40];
                }
                if (cResult[41] === buttonIcon) {
                  if (cResult[42] === buttonLabel) {
                    if (cResult[43] === buttonShiny) {
                      if (cResult[44] === buttonVariant) {
                        if (cResult[45] === experimental_withBlurBackground) {
                          if (cResult[46] === onButtonPress) {
                            let tmp58;
                            let tmp64;
                            let tmp66;
                            if (cResult[47] === tmp4.buttonSpacing) {
                              tmp58 = cResult[48];
                            }
                            const _Symbol = Symbol;
                            if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl = tmp(tmp2[18]).intl;
                              const stringResult = intl.string(ref(sharedValue[18]).t.cpT0Cq);
                              cResult[49] = stringResult;
                              tmp64 = stringResult;
                            } else {
                              tmp64 = cResult[49];
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj6 = { size: "xs", color: require("native").colors.ICON_STRONG };
                              const XSmallIcon = tmp(tmp2[19]).XSmallIcon;
                              const tmp68 = closure_11(XSmallIcon, obj6);
                              cResult[50] = tmp68;
                              tmp66 = tmp68;
                            } else {
                              tmp66 = cResult[50];
                            }
                            if (cResult[51] === tmp11) {
                              if (cResult[52] === tmp12) {
                                if (cResult[53] === onDismiss) {
                                  let tmp69;
                                  if (cResult[54] === tmp4.closeButton) {
                                    tmp69 = cResult[55];
                                  }
                                  if (cResult[56] === tmp54) {
                                    if (cResult[57] === tmp58) {
                                      let tmp73;
                                      let tmp78Result;
                                      if (cResult[58] === tmp69) {
                                        tmp73 = cResult[59];
                                      }
                                      if (cResult[60] === tmp73) {
                                        if (cResult[61] === experimental_withBlurBackground) {
                                          if (cResult[62] === gradientColor) {
                                            if (cResult[63] === sharedValue) {
                                              if (cResult[64] === tmp4.bodyBgColor) {
                                                if (cResult[65] === tmp4.bodyContainer) {
                                                  let tmp77;
                                                  let tmp84;
                                                  let tmp85;
                                                  if (cResult[66] === tmp4.gradient) {
                                                    tmp77 = cResult[67];
                                                  }
                                                  const _Symbol3 = Symbol;
                                                  if (cResult[68] === Symbol.for("react.memo_cache_sentinel")) {
                                                    function we(nativeEvent) {
                                                      nativeEvent = nativeEvent.nativeEvent;
                                                      size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                                      importDefault(size);
                                                    }
                                                    cResult[68] = we;
                                                    tmp84 = we;
                                                  } else {
                                                    tmp84 = cResult[68];
                                                  }
                                                  if (cResult[69] !== tmp4.shadow) {
                                                    let shadow;
                                                    const tmpResult5 = ref(sharedValue[22]);
                                                    if (tmpResult5.isIOS()) {
                                                      shadow = tmp4.shadow;
                                                    }
                                                    cResult[69] = tmp4.shadow;
                                                    cResult[70] = shadow;
                                                    tmp85 = shadow;
                                                  } else {
                                                    tmp85 = cResult[70];
                                                  }
                                                  let num68 = 0;
                                                  if (null != tmp7) {
                                                    num68 = 1;
                                                  }
                                                  if (cResult[71] === num68) {
                                                    if (cResult[72] === tooltipX) {
                                                      let tmp87;
                                                      if (cResult[73] === tooltipY) {
                                                        tmp87 = cResult[74];
                                                      }
                                                      if (cResult[75] === tmp4.container) {
                                                        if (cResult[76] === tmp85) {
                                                          let tmp88;
                                                          if (cResult[77] === tmp87) {
                                                            tmp88 = cResult[78];
                                                          }
                                                          if (cResult[79] === adjustmentX) {
                                                            let tmp89;
                                                            let items3;
                                                            if (cResult[80] === position) {
                                                              tmp89 = cResult[81];
                                                            }
                                                            if (cResult[82] === enterExitAnimatedStyles) {
                                                              let tmp93;
                                                              if (cResult[83] === tmp4.shadow) {
                                                                tmp93 = cResult[84];
                                                              }
                                                              if (cResult[85] === tmp15) {
                                                                if (cResult[86] === tmp4.body) {
                                                                  let tmp94;
                                                                  if (cResult[87] === tmp93) {
                                                                    tmp94 = cResult[88];
                                                                  }
                                                                  if (cResult[89] === tmp14) {
                                                                    if (cResult[90] === tmp77) {
                                                                      if (cResult[91] === onDismiss) {
                                                                        let tmp97;
                                                                        if (cResult[92] === tmp94) {
                                                                          tmp97 = cResult[93];
                                                                        }
                                                                        if (cResult[94] === adjustmentX) {
                                                                          let tmp104;
                                                                          if (cResult[95] === position) {
                                                                            tmp104 = cResult[96];
                                                                          }
                                                                          if (cResult[97] === tmp88) {
                                                                            if (cResult[98] === tmp89) {
                                                                              if (cResult[99] === tmp97) {
                                                                                let tmp108;
                                                                                if (cResult[100] === tmp104) {
                                                                                  tmp108 = cResult[101];
                                                                                }
                                                                                return tmp108;
                                                                              }
                                                                            }
                                                                          }
                                                                          const obj7 = { onLayout: tmp84, style: tmp88, children: items };
                                                                          items = [tmp89, tmp97, tmp104];
                                                                          const tmp111 = closure_12(closure_8, obj7);
                                                                          cResult[97] = tmp88;
                                                                          cResult[98] = tmp89;
                                                                          cResult[99] = tmp97;
                                                                          cResult[100] = tmp104;
                                                                          cResult[101] = tmp111;
                                                                          tmp108 = tmp111;
                                                                        }
                                                                        let tmp105 = "top" === position;
                                                                        if (tmp105) {
                                                                          const obj8 = { position: "top", adjustmentX };
                                                                          tmp105 = closure_11(closure_18, obj8);
                                                                        }
                                                                        cResult[94] = adjustmentX;
                                                                        cResult[95] = position;
                                                                        cResult[96] = tmp105;
                                                                        tmp104 = tmp105;
                                                                      }
                                                                    }
                                                                  }
                                                                  const obj9 = { onAccessibilityEscape: onDismiss, accessible: false, onPress: onDismiss, style: tmp94, children: tmp77 };
                                                                  const merged1 = Object.assign(tmp14);
                                                                  const tmp103 = closure_11(closure_14, obj9);
                                                                  cResult[89] = tmp14;
                                                                  cResult[90] = tmp77;
                                                                  cResult[91] = onDismiss;
                                                                  cResult[92] = tmp94;
                                                                  cResult[93] = tmp103;
                                                                  tmp97 = tmp103;
                                                                }
                                                              }
                                                              const items1 = [tmp4.body, ];
                                                              items1[HermesBuiltin.arraySpread(items1, tmp93, 1)] = tmp15;
                                                              cResult[85] = tmp15;
                                                              cResult[86] = tmp4.body;
                                                              cResult[87] = tmp93;
                                                              cResult[88] = items1;
                                                              tmp94 = items1;
                                                            }
                                                            const tmpResult6 = ref(sharedValue[22]);
                                                            if (tmpResult6.isAndroid()) {
                                                              const items2 = [tmp4.shadow, enterExitAnimatedStyles];
                                                              items3 = items2;
                                                            } else {
                                                              items3 = [];
                                                            }
                                                            cResult[82] = enterExitAnimatedStyles;
                                                            cResult[83] = tmp4.shadow;
                                                            cResult[84] = items3;
                                                            tmp93 = items3;
                                                          }
                                                          let tmp90 = "bottom" === position;
                                                          if (tmp90) {
                                                            const obj10 = { position: "bottom", adjustmentX };
                                                            tmp90 = closure_11(closure_18, obj10);
                                                          }
                                                          cResult[79] = adjustmentX;
                                                          cResult[80] = position;
                                                          cResult[81] = tmp90;
                                                          tmp89 = tmp90;
                                                        }
                                                      }
                                                      const items4 = [tmp4.container, tmp85, tmp87];
                                                      cResult[75] = tmp4.container;
                                                      cResult[76] = tmp85;
                                                      cResult[77] = tmp87;
                                                      cResult[78] = items4;
                                                      tmp88 = items4;
                                                    }
                                                  }
                                                  const rect = { opacity: num68, top: tooltipY, left: tooltipX };
                                                  cResult[71] = num68;
                                                  cResult[72] = tooltipX;
                                                  cResult[73] = tooltipY;
                                                  cResult[74] = rect;
                                                  tmp87 = rect;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (experimental_withBlurBackground) {
                                        const obj11 = { style: tmp4.bodyContainer, blurTheme: "dark", pressed: sharedValue, children: tmp73 };
                                        tmp78Result = closure_11(tmp(tmp2[20]).BackgroundBlurView, obj11);
                                      } else {
                                        const obj12 = { style: items5, children: items6 };
                                        items5 = [, ];
                                        ({ bodyContainer: arr6[0], bodyBgColor: arr6[1] } = tmp4);
                                        let tmp80 = null;
                                        const tmp78 = closure_12;
                                        const tmp79 = closure_8;
                                        if (null != gradientColor) {
                                          const obj13 = { style: tmp4.gradient, color: gradientColor, backgroundColor: require("native").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT };
                                          const ExpressiveGradient = tmp(tmp2[21]).ExpressiveGradient;
                                          tmp80 = closure_11(ExpressiveGradient, obj13);
                                        }
                                        items6 = [tmp80, tmp73];
                                        tmp78Result = tmp78(tmp79, obj12);
                                      }
                                      cResult[60] = tmp73;
                                      cResult[61] = experimental_withBlurBackground;
                                      cResult[62] = gradientColor;
                                      cResult[63] = sharedValue;
                                      cResult[64] = tmp4.bodyBgColor;
                                      cResult[65] = tmp4.bodyContainer;
                                      cResult[66] = tmp4.gradient;
                                      cResult[67] = tmp78Result;
                                      tmp77 = tmp78Result;
                                    }
                                  }
                                  const obj14 = { children: items7 };
                                  items7 = [tmp54, tmp58, tmp69];
                                  const tmp76 = closure_12(closure_13, obj14);
                                  cResult[56] = tmp54;
                                  cResult[57] = tmp58;
                                  cResult[58] = tmp69;
                                  cResult[59] = tmp76;
                                  tmp73 = tmp76;
                                }
                              }
                            }
                            const obj15 = { accessibilityRole: "button", accessibilityLabel: tmp64, style: tmp4.closeButton, onPress: onDismiss, onPressIn: tmp11, onPressOut: tmp12, children: tmp66 };
                            const tmp72 = closure_11(Pressable, obj15);
                            cResult[51] = tmp11;
                            cResult[52] = tmp12;
                            cResult[53] = onDismiss;
                            cResult[54] = tmp4.closeButton;
                            cResult[55] = tmp72;
                            tmp69 = tmp72;
                          }
                        }
                      }
                    }
                  }
                }
                let tmp60Result = null;
                if (null != buttonLabel) {
                  tmp60Result = null;
                  if (null != onButtonPress) {
                    let obj18;
                    const obj16 = { style: tmp4.buttonSpacing };
                    const items8 = [closure_11(closure_8, obj16), ];
                    const Button = tmp(tmp2[17]).Button;
                    const tmp60 = closure_12;
                    const tmp61 = closure_13;
                    const tmp62 = closure_11;
                    if (experimental_withBlurBackground) {
                      obj18 = { variant: "secondary-overlay", size: "lg", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, grow: true };
                      const obj17 = { variant: "secondary-overlay", size: "lg", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, grow: true };
                    } else {
                      let str2 = buttonVariant;
                      if (buttonVariant == null) {
                        str2 = "secondary";
                      }
                      obj18 = { variant: str2, size: "sm", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, shiny: buttonShiny, grow: true };
                    }
                    const obj19 = { children: items8 };
                    items8[1] = tmp62(Button, obj18);
                    tmp60Result = tmp60(tmp61, obj19);
                  }
                }
                cResult[41] = buttonIcon;
                cResult[42] = buttonLabel;
                cResult[43] = buttonShiny;
                cResult[44] = buttonVariant;
                cResult[45] = experimental_withBlurBackground;
                cResult[46] = onButtonPress;
                cResult[47] = tmp4.buttonSpacing;
                cResult[48] = tmp60Result;
                tmp58 = tmp60Result;
              }
            }
            const obj20 = { ref, accessibilityRole: "alert", style: tmp4.center, accessible: true, onLayout: tmp41, children: items9 };
            items9 = [tmp27, tmp50];
            const tmp57 = closure_12(closure_8, obj20);
            cResult[37] = tmp27;
            cResult[38] = tmp4.center;
            cResult[39] = tmp50;
            cResult[40] = tmp57;
            tmp54 = tmp57;
          }
        }
        const obj21 = { style: tmp4.textGap, children: items10 };
        items10 = [tmp44, tmp47];
        const tmp53 = closure_12(closure_8, obj21);
        cResult[33] = tmp4.textGap;
        cResult[34] = tmp44;
        cResult[35] = tmp47;
        cResult[36] = tmp53;
        tmp50 = tmp53;
      }
      const obj22 = { style: tmp4.text, variant: "text-sm/medium", color: "text-subtle", children: description };
      const tmp49 = closure_11(ref(sharedValue[16]).Text, obj22);
      cResult[30] = description;
      cResult[31] = tmp4.text;
      cResult[32] = tmp49;
      tmp47 = tmp49;
    }
    const obj23 = { style: tmp43, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title };
    const tmp46 = closure_11(ref(sharedValue[16]).Text, obj23);
    cResult[27] = tmp43;
    cResult[28] = title;
    cResult[29] = tmp46;
    tmp44 = tmp46;
  }
  const items11 = [tmp4.text, textOnlyPadding];
  cResult[24] = tmp4.text;
  cResult[25] = textOnlyPadding;
  cResult[26] = items11;
  tmp43 = items11;
}) : (function Coachmark(graphic) {
  let XSmallIcon;
  let buttonIcon;
  let buttonLabel;
  let buttonShiny;
  let buttonVariant;
  let description;
  let enterExitAnimatedStyles;
  let experimental_withBlurBackground;
  let gradientColor;
  let intl;
  let items10;
  let items11;
  let items12;
  let items14;
  let items3;
  let items5;
  let items8;
  let items9;
  let obj12;
  let offsetY;
  let onButtonPress;
  let onDismiss;
  let position;
  let renderImgComponent;
  let sharedValue;
  let surfaceMeasurements;
  let targetMeasurements;
  let title;
  let tmp14Result3;
  let tmp4;
  let tooltipX;
  let tooltipY;
  ({ targetMeasurements, surfaceMeasurements, offsetY } = graphic);
  let num = 0;
  ({ title, description } = graphic);
  if (undefined !== offsetY) {
    num = offsetY;
  }
  graphic = graphic.graphic;
  const imgSource = graphic.imgSource;
  ({ position, onDismiss, buttonLabel, buttonVariant, buttonIcon, onButtonPress, gradientColor, experimental_withBlurBackground, renderImgComponent } = graphic);
  ({ buttonShiny, enterExitAnimatedStyles } = graphic);
  const tmp = closure_15();
  closure_3 = tmp;
  const ref = react.useRef(null);
  const tmp3 = sharedValue(react.useState(null), 2);
  [tmp4, _objectWithoutProperties] = tmp3;
  const tmp7 = imgSource(renderImgComponent[11])(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
  const adjustmentX = tmp7.adjustmentX;
  let tmp8 = graphic;
  ({ tooltipX, tooltipY } = tmp7);
  let obj = graphic(renderImgComponent[6]);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  let obj2 = graphic(renderImgComponent[12]);
  const buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue);
  const style = buttonPressAnimationProps.style;
  let tmp13 = _objectWithoutProperties(buttonPressAnimationProps, ref);
  const items2 = [graphic, imgSource, renderImgComponent, tmp];
  let tmp15 = closure_13;
  let obj3 = {
    ref,
    accessibilityRole: "alert",
    style: tmp.center,
    accessible: true,
    onLayout() {
      const obj = react_native;
      const obj2 = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj2);
    },
    children: items3
  };
  items3 = [
    react.useMemo(() => {
      let Graphic;
      let obj3;
      let tmp15;
      if (null != graphic) {
        const obj2 = { style: closure_3.bottomMargin, children: tmp15(Graphic, obj3) };
        obj3 = { style: size };
        Graphic = Graphic2.Graphic;
        const merged = Object.assign(tmp);
        let str = tmp.aspectRatio;
        const tmp12 = unpackModuleId;
        const tmp13 = metroImportAll;
        tmp15 = unpackModuleId;
        const tmp21 = closure_16;
        if (str == null) {
          str = "1/1";
        }
        size = { height: tmp21[str], width: "auto" };
        return tmp12(tmp13, obj2);
      } else {
        let tmp2 = null;
        if (null != renderImgComponent) {
          tmp2 = tmp22();
        }
        if (null != imgSource) {
          const obj = { source: tmp3, style: closure_3.image };
          tmp2 = unpackModuleId(FastImageDefault, obj);
        }
        let tmp8 = null;
        if (null != tmp2) {
          const obj4 = { style: closure_3.bottomMargin, children: tmp2 };
          tmp8 = unpackModuleId(metroImportAll, obj4);
        }
        return tmp8;
      }
    }, items2),

  ];
  let obj4 = { style: tmp.textGap, children: items5 };
  const items4 = [tmp.text, ];
  let textOnlyPadding;
  const Text = graphic(renderImgComponent[16]).Text;
  if (null == graphic) {
    textOnlyPadding = tmp.textOnlyPadding;
  }
  items4[1] = textOnlyPadding;
  items5 = [tmp17(Text, { style: items4, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title }), ];
  const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-subtle", children: description };
  items5[1] = closure_11(tmp8(renderImgComponent[16]).Text, obj5);
  items3[1] = closure_12(closure_8, obj4);
  const items6 = [tmp14(tmp16, obj3), , ];
  let tmp14Result = null;
  if (null != buttonLabel) {
    tmp14Result = null;
    if (null != onButtonPress) {
      let obj8;
      const obj6 = { style: tmp.buttonSpacing };
      const items7 = [tmp17(tmp16, obj6), ];
      const Button = tmp8(tmp6[17]).Button;
      if (experimental_withBlurBackground) {
        obj8 = { variant: "secondary-overlay", size: "lg", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, grow: true };
        const obj7 = { variant: "secondary-overlay", size: "lg", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, grow: true };
      } else {
        if (buttonVariant == null) {
          buttonVariant = "secondary";
        }
        obj8 = { variant: buttonVariant, size: "sm", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, shiny: buttonShiny, grow: true };
      }
      const obj9 = { children: items7 };
      items7[1] = closure_11(Button, obj8);
      tmp14Result = tmp14(tmp15, obj9);
    }
  }
  const obj10 = { children: items6 };
  items6[1] = tmp14Result;
  const obj11 = { accessibilityRole: "button", accessibilityLabel: intl.string(tmp8(renderImgComponent[18]).t.cpT0Cq), style: tmp.closeButton, onPress: onDismiss, onPressIn: callback, onPressOut: callback1, children: closure_11(XSmallIcon, obj12) };
  intl = tmp8(tmp6[18]).intl;
  obj12 = { size: "xs", color: imgSource(renderImgComponent[8]).colors.ICON_STRONG };
  XSmallIcon = tmp8(tmp6[19]).XSmallIcon;
  items6[2] = closure_11(Pressable, obj11);
  const tmp14Result2 = closure_12(tmp15, obj10);
  if (experimental_withBlurBackground) {
    const obj13 = { style: tmp.bodyContainer, blurTheme: "dark", pressed: sharedValue, children: tmp14Result2 };
    tmp14Result3 = tmp17(tmp8(tmp6[20]).BackgroundBlurView, obj13);
  } else {
    const obj14 = { style: items8, children: items9 };
    items8 = [, ];
    ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
    let tmp17Result4 = null;
    if (null != gradientColor) {
      const obj15 = { style: tmp.gradient, color: gradientColor, backgroundColor: imgSource(renderImgComponent[8]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT };
      const ExpressiveGradient = tmp8(tmp6[21]).ExpressiveGradient;
      tmp17Result4 = tmp17(ExpressiveGradient, obj15);
    }
    items9 = [tmp17Result4, tmp14Result2];
    tmp14Result3 = tmp14(tmp16, obj14);
  }
  const obj16 = {
    onLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
      _objectWithoutProperties(size);
    },
    style: items10,
    children: items11
  };
  items10 = [tmp.container, , ];
  let shadow;
  const tmp8Result = tmp8(renderImgComponent[22]);
  if (tmp8Result.isIOS()) {
    shadow = tmp.shadow;
  }
  items10[1] = shadow;
  let num2 = 0;
  if (null != tmp4) {
    num2 = 1;
  }
  items10[2] = { opacity: num2, top: tooltipY, left: tooltipX };
  let tmp17Result5 = "bottom" === position;
  if (tmp17Result5) {
    const obj17 = { position: "bottom", adjustmentX };
    tmp17Result5 = tmp17(closure_18, obj17);
  }
  items11 = [tmp17Result5, , ];
  const obj18 = { onAccessibilityEscape: onDismiss, accessible: false, onPress: onDismiss, style: items12, children: tmp14Result3 };
  let merged = Object.assign(tmp13);
  items12 = [tmp.body, ];
  const tmp26 = closure_14;
  const tmp8Result2 = tmp8(renderImgComponent[22]);
  if (tmp8Result2.isAndroid()) {
    const items13 = [tmp.shadow, enterExitAnimatedStyles];
    items14 = items13;
  } else {
    items14 = [];
  }
  items12[HermesBuiltin.arraySpread(items12, items14, 1)] = style;
  items11[1] = closure_11(tmp26, obj18);
  let tmp17Result6 = "top" === position;
  if (tmp17Result6) {
    const obj19 = { position: "top", adjustmentX };
    tmp17Result6 = tmp17(closure_18, obj19);
  }
  items11[2] = tmp17Result6;
  return closure_12(closure_8, obj16);
});
let closure_17 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function Cursor(position) {
  let items;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(17);
  position = position.position;
  const adjustmentX = position.adjustmentX;
  const tmp2 = closure_15();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  if (cResult[0] !== position) {
    const tmp5 = "top" === position ? { marginTop: -6 } : { marginBottom: -6 };
    cResult[0] = position;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === str) {
    let tmp7;
    if (cResult[3] === -adjustmentX) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4) {
      if (cResult[6] === tmp2.cursorContainer) {
        let tmp8;
        let tmp9;
        let tmp13;
        if (cResult[7] === tmp7) {
          tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp2.cursorHead) {
          const obj2 = { style: tmp2.cursorHead };
          const tmp12 = unpackModuleId(metroImportAll, obj2);
          cResult[9] = tmp2.cursorHead;
          cResult[10] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[10];
        }
        if (cResult[11] !== tmp2.cursorSpine) {
          const obj3 = { style: tmp2.cursorSpine };
          const tmp16 = unpackModuleId(metroImportAll, obj3);
          cResult[11] = tmp2.cursorSpine;
          cResult[12] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[12];
        }
        if (cResult[13] === tmp8) {
          if (cResult[14] === tmp9) {
            let tmp17;
            if (cResult[15] === tmp13) {
              tmp17 = cResult[16];
            }
            return tmp17;
          }
        }
        const obj4 = { style: tmp8, children: items };
        items = [tmp9, tmp13];
        const tmp20 = authStore2(metroImportAll, obj4);
        cResult[13] = tmp8;
        cResult[14] = tmp9;
        cResult[15] = tmp13;
        cResult[16] = tmp20;
        tmp17 = tmp20;
      }
    }
    const items1 = [tmp2.cursorContainer, tmp4, tmp7];
    cResult[5] = tmp4;
    cResult[6] = tmp2.cursorContainer;
    cResult[7] = tmp7;
    cResult[8] = items1;
    tmp8 = items1;
  }
  const obj5 = { flexDirection: str, left: -adjustmentX };
  cResult[2] = str;
  cResult[3] = -adjustmentX;
  cResult[4] = obj5;
  tmp7 = obj5;
}) : (function Cursor(arg0) {
  let adjustmentX;
  let items;
  let items1;
  let position;
  ({ position, adjustmentX } = arg0);
  const tmp = closure_15();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  const obj = { style: items, children: items1 };
  items = [tmp.cursorContainer, "top" === position ? { marginTop: -6 } : { marginBottom: -6 }, { flexDirection: str, left: -adjustmentX }];
  items1 = [, ];
  const obj2 = { style: tmp.cursorHead };
  items1[0] = unpackModuleId(metroImportAll, obj2);
  const obj3 = { style: tmp.cursorSpine };
  items1[1] = unpackModuleId(metroImportAll, obj3);
  return authStore2(metroImportAll, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function CoachmarkContainer(experimental_withBlurBackground) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = native;
  let DARK = obj2.useThemeContext().theme;
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
    DARK = ThemeTypes.DARK;
  }
  if (cResult[0] !== experimental_withBlurBackground) {
    const obj3 = {};
    const merged = Object.assign(experimental_withBlurBackground);
    const tmp11 = unpackModuleId(closure_17, obj3);
    cResult[0] = experimental_withBlurBackground;
    cResult[1] = tmp11;
    tmp5 = tmp11;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp12;
    if (cResult[3] === DARK) {
      tmp12 = cResult[4];
    }
    return tmp12;
  }
  const tmp13 = unpackModuleId(native.ThemeContextProvider, { theme: DARK, children: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = DARK;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : (function CoachmarkContainer(experimental_withBlurBackground) {
  let obj3;
  const obj = native;
  let DARK = obj.useThemeContext().theme;
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
    DARK = ThemeTypes.DARK;
  }
  const obj2 = { theme: DARK, children: unpackModuleId(closure_17, obj3) };
  obj3 = {};
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(experimental_withBlurBackground);
  return unpackModuleId(ThemeContextProvider, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export const Coachmark = tmp6;
export const CoachmarkContainer = tmp7;
