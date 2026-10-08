// Module ID: 5383
// Function ID: 5384
// Name: Button/BaseButton
// Dependencies: [109, 19, 17, 1085, 5384, 21, 558, 4787, 5090, 576, 5381, 4810, 1387, 1381, 2]

// Module 5383 (Button/BaseButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import native from "native" /* 4787 */;
import ButtonHooks from "ButtonHooks" /* 5381 */;
import styleConstants from "styleConstants" /* 5384 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 5090 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4810 */;
import size from "module_2" /* 2 */;

let Pressable;
let TouchableOpacity;
let closure_2 = ["style"];
let closure_3 = ["style"];
({ Pressable, TouchableOpacity } = react_native);
const ThemeTypes = Constants.ThemeTypes;
const IOS_POINTER_STYLE = styleConstants.IOS_POINTER_STYLE;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useThemeOverrideVariant(arg0) {
  let DARK;
  native;
  if ("primary-overlay" === arg0) {
    DARK = ThemeTypes.LIGHT;
  } else if ("secondary-overlay" === arg0) {
    if (tmp2 === ThemeTypes.LIGHT) {
      DARK = ThemeTypes.DARK;
    }
  }
  return DARK;
}) : (function useThemeOverrideVariant(arg0) {
  let DARK;
  native;
  if ("primary-overlay" === arg0) {
    DARK = ThemeTypes.LIGHT;
  } else if ("secondary-overlay" === arg0) {
    if (tmp2 === ThemeTypes.LIGHT) {
      DARK = ThemeTypes.DARK;
    }
  }
  return DARK;
});
let closure_10 = createStyles.createStyles({ disabled: { opacity: 0.5 } });
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useButtonPressAnimationPropsIfPressed(arg0, arg1, onLayout, onPressIn, onPressOut) {
  let obj4;
  let tmp3;
  let tmp4;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(10);
  const obj2 = ButtonHooks;
  const buttonPressAnimationProps = obj2.useButtonPressAnimationProps(arg0, arg1, onLayout, onPressIn, onPressOut);
  if (cResult[0] !== buttonPressAnimationProps) {
    const style = buttonPressAnimationProps.style;
    const tmp7 = _objectWithoutProperties(buttonPressAnimationProps, closure_2);
    cResult[0] = buttonPressAnimationProps;
    cResult[1] = style;
    cResult[2] = tmp7;
    tmp4 = tmp7;
    tmp3 = style;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (null == arg0) {
    if (cResult[3] === onLayout) {
      if (cResult[4] === onPressIn) {
        let tmp9;
        if (cResult[5] === onPressOut) {
          tmp9 = cResult[6];
        }
        tmp8 = tmp9;
      }
    }
    const obj3 = { animatedScaleStyles: "Array", buttonAnimationProps: obj4 };
    obj4 = { onLayout, onPressIn, onPressOut };
    cResult[3] = onLayout;
    cResult[4] = onPressIn;
    cResult[5] = onPressOut;
    cResult[6] = obj3;
    tmp9 = obj3;
  } else {
    if (cResult[7] === tmp3) {
      if (cResult[8] === tmp4) {
        tmp8 = cResult[9];
      }
    }
    const obj5 = { animatedScaleStyles: tmp3, buttonAnimationProps: tmp4 };
    cResult[7] = tmp3;
    cResult[8] = tmp4;
    cResult[9] = obj5;
    tmp8 = obj5;
  }
  return tmp8;
}) : (function useButtonPressAnimationPropsIfPressed(arg0, arg1, onLayout, onPressIn, onPressOut) {
  let obj3;
  let obj4;
  const obj = ButtonHooks;
  const buttonPressAnimationProps = obj.useButtonPressAnimationProps(arg0, arg1, onLayout, onPressIn, onPressOut);
  const style = buttonPressAnimationProps.style;
  if (null == arg0) {
    const obj2 = { animatedScaleStyles: "Array", buttonAnimationProps: obj3 };
    obj4 = obj2;
    obj3 = { onLayout, onPressIn, onPressOut };
  } else {
    obj4 = { animatedScaleStyles: style, buttonAnimationProps: tmp2 };
  }
  return obj4;
});
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_12 = ReanimatedRexport.createAnimatedComponent(Pressable);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_13 = ReanimatedRexport.createAnimatedComponent(TouchableOpacity);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseButton(arg0) {
  let accessibilityActions;
  let accessibilityElementsHidden;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let accessibilityValue;
  let accessible;
  let animatedScaleStyles;
  let buttonAnimationProps;
  let children;
  let disabled;
  let hitSlop;
  let importantForAccessibility;
  let loading;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let onPressDisabled;
  let onPressIn;
  let onPressOut;
  let pointerEvents;
  let pressed;
  let ref;
  let scaleAmountInPx;
  let style;
  let variant;
  const obj = react2;
  const cResult = obj.c(51);
  ({ children, style, variant, disabled, loading, pressed, onPress, onPressDisabled, onPressIn, onPressOut, onLongPress, onLayout, accessible, accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityValue, accessibilityState, accessibilityActions, onAccessibilityAction, accessibilityElementsHidden, importantForAccessibility, pointerEvents, hitSlop, scaleAmountInPx, ref } = arg0);
  let str = "primary";
  if (undefined !== variant) {
    str = variant;
  }
  let disabled2 = undefined !== disabled && disabled;
  let tmp6 = disabled2;
  const tmp5 = closure_10();
  if (disabled2) {
    tmp6 = null == onPressDisabled;
  }
  if (disabled2) {
    onPress = onPressDisabled;
  }
  ({ animatedScaleStyles, buttonAnimationProps } = closure_11(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut));
  closure_11(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  if (cResult[0] === accessibilityState) {
    if (cResult[1] === tmp6) {
      let tmp9;
      if (cResult[2] === (undefined !== loading && loading)) {
        tmp9 = cResult[3];
      }
      const tmp12 = closure_9(str);
      if (cResult[4] === children) {
        let tmp13;
        if (cResult[5] === tmp12) {
          tmp13 = cResult[6];
        }
        if (disabled2) {
          disabled2 = tmp5.disabled;
        }
        if (cResult[7] === animatedScaleStyles) {
          if (cResult[8] === style) {
            let tmp16;
            if (cResult[9] === disabled2) {
              tmp16 = cResult[10];
            }
            if ("none" !== accessibilityRole) {
              if (accessibilityRole == null) {
                accessibilityRole = "button";
              }
              if (cResult[11] === accessibilityActions) {
                if (cResult[12] === accessibilityElementsHidden) {
                  if (cResult[13] === accessibilityHint) {
                    if (cResult[14] === accessibilityLabel) {
                      if (cResult[15] === tmp9) {
                        if (cResult[16] === accessibilityValue) {
                          if (cResult[17] === accessible) {
                            if (cResult[18] === buttonAnimationProps) {
                              if (cResult[19] === tmp16) {
                                if (cResult[20] === hitSlop) {
                                  if (cResult[21] === importantForAccessibility) {
                                    if (cResult[22] === tmp6) {
                                      if (cResult[23] === onAccessibilityAction) {
                                        if (cResult[24] === onLongPress) {
                                          if (cResult[25] === onPress) {
                                            if (cResult[26] === pointerEvents) {
                                              if (cResult[27] === ref) {
                                                if (cResult[28] === accessibilityRole) {
                                                  let tmp30;
                                                  if (cResult[29] === tmp13) {
                                                    tmp30 = cResult[30];
                                                  }
                                                  return tmp30;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const merged = Object.assign(buttonAnimationProps);
              const tmp36 = <closure_12 ref={ref} accessible={accessible} accessibilityRole={accessibilityRole} accessibilityLabel={accessibilityLabel} accessibilityHint={accessibilityHint} accessibilityValue={accessibilityValue} accessibilityState={tmp9} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} pointerEvents={pointerEvents} style={tmp16} onPress={onPress} onLongPress={onLongPress} disabled={tmp6} hitSlop={hitSlop}>{tmp13}</closure_12>;
              cResult[11] = accessibilityActions;
              cResult[12] = accessibilityElementsHidden;
              cResult[13] = accessibilityHint;
              cResult[14] = accessibilityLabel;
              cResult[15] = tmp9;
              cResult[16] = accessibilityValue;
              cResult[17] = accessible;
              cResult[18] = buttonAnimationProps;
              cResult[19] = tmp16;
              cResult[20] = hitSlop;
              cResult[21] = importantForAccessibility;
              cResult[22] = tmp6;
              cResult[23] = onAccessibilityAction;
              cResult[24] = onLongPress;
              cResult[25] = onPress;
              cResult[26] = pointerEvents;
              cResult[27] = ref;
              cResult[28] = accessibilityRole;
              cResult[29] = tmp13;
              cResult[30] = tmp36;
              tmp30 = tmp36;
            } else {
              if (cResult[31] === accessibilityElementsHidden) {
                if (cResult[32] === accessibilityHint) {
                  let tmp18;
                  let tmp22;
                  let tmp21;
                  if (cResult[33] === accessibilityLabel) {
                    tmp18 = cResult[34];
                  }
                  let isAndroidResult = accessible;
                  if (accessible == null) {
                    const tmpResult = PlatformUtils;
                    isAndroidResult = tmpResult.isAndroid();
                  }
                  if (cResult[35] !== buttonAnimationProps) {
                    function ce(arg0) {
                      const onPressIn = buttonAnimationProps.onPressIn;
                      if (onPressIn != null) {
                        onPressIn(arg0);
                      }
                    }
                    function re(arg0) {
                      const onPressOut = buttonAnimationProps.onPressOut;
                      if (onPressOut != null) {
                        onPressOut(arg0);
                      }
                    }
                    cResult[35] = buttonAnimationProps;
                    cResult[36] = ce;
                    cResult[37] = re;
                    tmp22 = re;
                    tmp21 = ce;
                  } else {
                    tmp21 = cResult[36];
                    tmp22 = cResult[37];
                  }
                  if (cResult[38] === accessibilityElementsHidden) {
                    if (cResult[39] === buttonAnimationProps) {
                      if (cResult[40] === tmp16) {
                        if (cResult[41] === tmp18) {
                          if (cResult[42] === hitSlop) {
                            if (cResult[43] === importantForAccessibility) {
                              if (cResult[44] === onPress) {
                                if (cResult[45] === ref) {
                                  if (cResult[46] === tmp21) {
                                    if (cResult[47] === tmp22) {
                                      if (cResult[48] === (!isAndroidResult && undefined)) {
                                        let tmp23;
                                        if (cResult[49] === tmp13) {
                                          tmp23 = cResult[50];
                                        }
                                        return tmp23;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const merged1 = Object.assign(buttonAnimationProps);
                  const tmp29 = <closure_13 ref={ref} accessible={!isAndroidResult && undefined} accessibilityRole="none" accessibilityLabel={tmp18} accessibilityElementsHidden={accessibilityElementsHidden} activeOpacity={1} importantForAccessibility={importantForAccessibility} style={tmp16} onPress={onPress} onPressIn={tmp21} onPressOut={tmp22} hitSlop={hitSlop}>{tmp13}</closure_13>;
                  cResult[38] = accessibilityElementsHidden;
                  cResult[39] = buttonAnimationProps;
                  cResult[40] = tmp16;
                  cResult[41] = tmp18;
                  cResult[42] = hitSlop;
                  cResult[43] = importantForAccessibility;
                  cResult[44] = onPress;
                  cResult[45] = ref;
                  cResult[46] = tmp21;
                  cResult[47] = tmp22;
                  cResult[48] = !isAndroidResult && undefined;
                  cResult[49] = tmp13;
                  cResult[50] = tmp29;
                  tmp23 = tmp29;
                }
              }
              let str3 = "";
              if (!accessibilityElementsHidden) {
                const items = [accessibilityLabel, accessibilityHint];
                const found = items.filter(tmp(1387).isNotNullish);
                str3 = found.join(", ");
              }
              cResult[31] = accessibilityElementsHidden;
              cResult[32] = accessibilityHint;
              cResult[33] = accessibilityLabel;
              cResult[34] = str3;
              tmp18 = str3;
            }
          }
        }
        const items1 = [style, disabled2, animatedScaleStyles, IOS_POINTER_STYLE];
        cResult[7] = animatedScaleStyles;
        cResult[8] = style;
        cResult[9] = disabled2;
        cResult[10] = items1;
        tmp16 = items1;
      }
      let tmp14 = children;
      if (null != tmp12) {
        tmp14 = jsx(tmp(4787).ThemeContextProvider, { theme: tmp12, children });
      }
      cResult[4] = children;
      cResult[5] = tmp12;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    }
  }
  const obj5 = { disabled: tmp6, busy: undefined !== loading && loading };
  const merged2 = Object.assign(accessibilityState);
  cResult[0] = accessibilityState;
  cResult[1] = tmp6;
  cResult[2] = undefined !== loading && loading;
  cResult[3] = obj5;
  tmp9 = obj5;
}) : (function BaseButton(style) {
  let accessibilityActions;
  let accessibilityElementsHidden;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let accessibilityValue;
  let accessible;
  let children;
  let hitSlop;
  let importantForAccessibility;
  let isAndroidResult;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let onPressDisabled;
  let onPressIn;
  let onPressOut;
  let pointerEvents;
  let pressed;
  let ref;
  let scaleAmountInPx;
  let variant;
  ({ children, variant } = style);
  style = style.style;
  if (variant === undefined) {
    variant = "primary";
  }
  let flag = style.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = style.loading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ pressed, onPress, onPressDisabled, onPressIn, onPressOut, onLayout, accessible, accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityState } = style);
  ({ accessibilityElementsHidden, importantForAccessibility, hitSlop, scaleAmountInPx, ref } = style);
  closure_2 = undefined;
  let buttonAnimationProps;
  ({ onLongPress, accessibilityValue, accessibilityActions, onAccessibilityAction, pointerEvents } = style);
  let tmp2 = flag;
  const tmp = closure_10();
  if (flag) {
    tmp2 = null == onPressDisabled;
  }
  closure_2 = tmp2;
  if (flag) {
    onPress = onPressDisabled;
  }
  const tmp4 = closure_11(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  buttonAnimationProps = tmp4.buttonAnimationProps;
  const items = [accessibilityState, tmp2, flag2];
  const animatedScaleStyles = tmp4.animatedScaleStyles;
  const memo = react.useMemo(() => {
    const obj = { disabled, busy: flag2 };
    const merged = Object.assign(accessibilityState);
    return obj;
  }, items);
  const tmp6 = closure_9(variant);
  let tmp7 = children;
  if (null != tmp6) {
    tmp7 = jsx(native.ThemeContextProvider, { theme: tmp6, children });
  }
  const items1 = [style, , , ];
  if (flag) {
    flag = tmp.disabled;
  }
  items1[1] = flag;
  items1[2] = animatedScaleStyles;
  items1[3] = IOS_POINTER_STYLE;
  if ("none" !== accessibilityRole) {
    const obj2 = { ref, accessible, accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityValue, accessibilityState: memo, accessibilityActions, onAccessibilityAction, accessibilityElementsHidden, importantForAccessibility, pointerEvents, style: items1, onPress, onLongPress, disabled: tmp2, hitSlop, children: tmp7 };
    let merged = Object.assign(buttonAnimationProps);
    const tmp21 = jsx;
    const tmp22 = closure_12;
    if (accessibilityRole == null) {
      accessibilityRole = "button";
    }
    return tmp21(tmp22, obj2);
  } else {
    let str2 = "";
    if (!accessibilityElementsHidden) {
      const items2 = [accessibilityLabel, accessibilityHint];
      const found = items2.filter(GlobalUtils.isNotNullish);
      str2 = found.join(", ");
    }
    const obj3 = {
      ref,
      accessible: !isAndroidResult && undefined,
      accessibilityRole: "none",
      accessibilityLabel: str2,
      accessibilityElementsHidden,
      activeOpacity: 1,
      importantForAccessibility,
      style: items1,
      onPress,
      onPressIn(arg0) {
          const onPressIn = buttonAnimationProps.onPressIn;
          if (onPressIn != null) {
            onPressIn(arg0);
          }
        },
      onPressOut(arg0) {
          const onPressOut = buttonAnimationProps.onPressOut;
          if (onPressOut != null) {
            onPressOut(arg0);
          }
        },
      hitSlop,
      children: tmp7
    };
    const merged1 = Object.assign(buttonAnimationProps);
    isAndroidResult = accessible;
    const tmp13 = jsx;
    const tmp14 = closure_13;
    if (accessible == null) {
      const obj4 = PlatformUtils;
      isAndroidResult = obj4.isAndroid();
    }
    return tmp13(tmp14, obj3);
  }
});
const result = size.fileFinishedImporting("design/components/Button/native/BaseButton.native.tsx");

export const BaseButton = tmp3;
