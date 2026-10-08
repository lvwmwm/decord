// Module ID: 6829
// Function ID: 6830
// Name: Sheet/BottomSheet
// Dependencies: [32, 109, 19, 17, 6830, 21, 5090, 587, 1381, 558, 576, 1630, 5360, 6261, 6298, 5387, 1105, 4810, 6831, 4794, 6832, 5392, 6833, 6834, 6719, 1496, 4932, 6835, 4787, 2]

// Module 6829 (Sheet/BottomSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4932 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import BottomSheetModal from "BottomSheetModal" /* 6298 */;
import reactDefault from "react" /* 6831 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 6833 */;
import Sheet_BottomSheetBackdrop from "Sheet/BottomSheetBackdrop" /* 6834 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6830 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, tmp5Result;

let Platform;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let map1;
let tmp;
let tmp2;
let unpackModuleId;
const ConstantsIOS = tmp(1105);
const useIsScreenReaderEnabled = tmp(5360);
const NavigatorConstants = tmp(6261);
const BottomSheetModalDefault = tmp2(6298);
const NavScrim = tmp2(6719);
let closure_3 = ["startHeight", "hasEverExpanded", "windowDimensions", "wrapperStyle", "scrollViewStyle", "startExpanded", "onChange", "onExpand", "keyboardShouldPersistTaps", "children", "maxDynamicContentSize", "ref"];
let closure_4 = ["startHeight", "contentHeight", "maxHeight", "hasEverExpanded", "windowDimensions", "wrapperStyle", "onChange", "onExpand", "children", "borderGradient", "extraContent", "ref"];
let closure_5 = ["scrollable", "startHeight", "maxHeight", "containerHeight", "startExpanded", "backdropOpacity", "backdropChildren", "header", "handleComponent", "handleDisabled", "dismissAccessibilityLabel", "footer", "onExpand", "onDismiss", "keyboardShouldPersistTaps", "children", "backgroundStyles", "contentStyles", "bodyStyles", "borderGradient", "showGradient", "extraContent", "contentHeight", "ref"];
({ StyleSheet: c9, View: c10, Platform } = react_native);
({ ACTION_SHEET_START_HEIGHT_RATIO: unpackModuleId, ACTION_SHEET_MAX_WIDTH: closure_12, ACTION_SHEET_SPRING_CONFIG: map1, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: closure_14, ACTION_SHEET_GRADIENT_BORDER_WIDTH: closure_15, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_16, ACTION_SHEET_BORDER_RADIUS: closure_17, ACTION_SHEET_INNER_BORDER_RADIUS: closure_18, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_19 } = ActionSheetConstants);
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let closure_22 = createStyles.createStyles((arg0) => {
  let num2;
  let obj4;
  let obj6;
  let obj8;
  let str;
  let tmp5;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = { background: { overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, wrapper: { overflow: "hidden", flex: 1 }, wrapperWithBorder: { overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: obj4, gradient: obj6, handleIndicator: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, backgroundOverlay: obj8, header: { marginBottom: 16 }, body: { flex: 1 } };
  ({ overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  let tmp4;
  ({ overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  if (arg0) {
    tmp4 = tmp;
  }
  obj4 = { borderTopLeftRadius: tmp4, borderTopRightRadius: tmp5, overflow: str, marginBottom: num2, flex: 1 };
  tmp5 = undefined;
  if (arg0) {
    tmp5 = tmp;
  }
  str = undefined;
  if (arg0) {
    str = "hidden";
  }
  num2 = 0;
  if (!flag) {
    num2 = num + 4;
  }
  let str2;
  const obj5 = PlatformUtils;
  if (obj5.isIOS()) {
    str2 = "hidden";
  }
  obj6 = { height: "100%", overflow: str2, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius };
  obj8 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
  const merged = Object.assign(React4.absoluteFillObject);
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContentSizeBottomSheetInner(arg0) {
  let children;
  let closure_129_4;
  let diff;
  let hasEverExpanded;
  let items1;
  let keyboardShouldPersistTaps;
  let maxDynamicContentSize;
  let onChange;
  let onExpand;
  let ref;
  let result;
  let scrollViewStyle;
  let startExpanded;
  let startHeight;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp21;
  let tmp5;
  let tmp8;
  let windowDimensions;
  let wrapperStyle;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(40);
  if (cResult[0] !== arg0) {
    ({ startHeight, hasEverExpanded, windowDimensions, wrapperStyle, scrollViewStyle, startExpanded, onChange, onExpand, keyboardShouldPersistTaps, children, maxDynamicContentSize, ref } = arg0);
    let closure_0 = onChange;
    let closure_1 = onExpand;
    cResult[0] = arg0;
    cResult[1] = maxDynamicContentSize;
    cResult[2] = children;
    cResult[3] = keyboardShouldPersistTaps;
    cResult[4] = onChange;
    cResult[5] = onExpand;
    cResult[6] = _objectWithoutProperties(arg0, closure_3);
    cResult[7] = ref;
    cResult[8] = scrollViewStyle;
    cResult[9] = startExpanded;
    cResult[10] = startHeight;
    cResult[11] = windowDimensions;
    cResult[12] = wrapperStyle;
    tmp15 = wrapperStyle;
    tmp14 = windowDimensions;
    result = startHeight;
    tmp12 = startExpanded;
    tmp5 = children;
    diff = maxDynamicContentSize;
    const tmp18 = _objectWithoutProperties(arg0, closure_3);
    tmp8 = onExpand;
  } else {
    diff = cResult[1];
    tmp5 = cResult[2];
    closure_0 = cResult[4];
    closure_1 = cResult[5];
    tmp12 = cResult[9];
    result = cResult[10];
    tmp14 = cResult[11];
    tmp15 = cResult[12];
  }
  const height = tmp14.height;
  const top = useSafeAreaInsetsDefault().top;
  const tmpResult = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = tmpResult.useIsScreenReaderEnabled();
  if (result == null) {
    result = height * unpackModuleId;
  }
  if (diff == null) {
    diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top;
  }
  if (cResult[13] === result) {
    if (cResult[14] === isScreenReaderEnabled) {
      let tmp25;
      let tmp24;
      if (cResult[15] === tmp12) {
        tmp21 = cResult[16];
      }
      [r10081, closure_129_4] = react.useState(tmp21);
      _slicedToArray(react.useState(tmp21), 2);
      const obj3 = react;
      if (cResult[17] !== isScreenReaderEnabled) {
        class W {
          constructor() {
            const tmp = isScreenReaderEnabled;
            if (tmp) {
              closure_1_4([]);
            }
          }
        }
        const items = [isScreenReaderEnabled];
        cResult[17] = isScreenReaderEnabled;
        cResult[18] = W;
        cResult[19] = items;
        tmp25 = items;
        tmp24 = W;
      } else {
        class W {
          constructor() {
            const tmp = isScreenReaderEnabled;
            if (tmp) {
              closure_1_4([]);
            }
          }
        }
        tmp25 = cResult[19];
      }
      const effect = obj3.useEffect(tmp24, tmp25);
      if (cResult[20] !== result) {
        class Y {
          constructor(nativeEvent) {
            if (nativeEvent.nativeEvent.layout.height < result) {
              closure_1_4([]);
            }
          }
        }
        cResult[20] = result;
        cResult[21] = Y;
      } else {
        class Y {
          constructor(nativeEvent) {
            if (nativeEvent.nativeEvent.layout.height < result) {
              closure_1_4([]);
            }
          }
        }
      }
      if (cResult[22] === tmp7) {
        class Y {
          constructor(nativeEvent) {
            if (nativeEvent.nativeEvent.layout.height < result) {
              closure_1_4([]);
            }
          }
        }
        if (cResult[25] === tmp5) {
          class Y {
            constructor(nativeEvent) {
              if (nativeEvent.nativeEvent.layout.height < result) {
                closure_1_4([]);
              }
            }
          }
        }
        const obj2 = { onLayout: tmp27, style: tmp15, children: tmp5 };
        cResult[25] = tmp5;
        cResult[26] = tmp27;
        cResult[27] = tmp15;
        cResult[28] = closure_20(authStore, obj2);
        const tmp32 = closure_20(authStore, obj2);
      }
      const fn = function $(arg0, arg1, arg2) {
        if (closure_0 != null) {
          tmp(arg0, arg1, arg2);
        }
        if (0 === arg0) {
          if (closure_1 != null) {
            tmp5();
          }
        }
      };
      cResult[22] = tmp7;
      cResult[23] = tmp8;
      cResult[24] = fn;
    }
  }
  if (!isScreenReaderEnabled) {
    class Y {
      constructor(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height < result) {
          closure_1_4([]);
        }
      }
    }
    cResult[13] = result;
    cResult[14] = isScreenReaderEnabled;
    cResult[15] = tmp12;
    cResult[16] = items1;
    tmp21 = items1;
  }
  items1 = [];
}) : (function ContentSizeBottomSheetInner(windowDimensions) {
  let BottomSheetScrollView;
  let children;
  let first;
  let hasEverExpanded;
  let keyboardShouldPersistTaps;
  let obj4;
  let obj5;
  let ref;
  let scrollViewStyle;
  let startExpanded;
  let startHeight;
  let wrapperStyle;
  ({ startHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children, ref } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, scrollViewStyle: 0, startExpanded: 0, onChange: 0, onExpand: 0, keyboardShouldPersistTaps: 0, children: 0, maxDynamicContentSize: 0, ref: 0 }));
  startHeight = undefined;
  closure_4 = undefined;
  const top = useSafeAreaInsetsDefault().top;
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * unpackModuleId;
  }
  if (!isScreenReaderEnabled) {
    let items;
    if (!startExpanded) {
      items = [startHeight];
    }
    [first, closure_4] = tmp7(items);
    const items1 = [isScreenReaderEnabled];
    const effect = obj2.useEffect(() => {
      const tmp = isScreenReaderEnabled;
      if (tmp) {
        closure_4([]);
      }
    }, items1);
    const items2 = [startHeight];
    const items3 = [onChange, onExpand];
    const callback = obj2.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.layout.height < startHeight) {
        closure_4([]);
      }
    }, items2);
    const callback1 = obj2.useCallback((arg0, arg1, arg2) => {
      if (onChange != null) {
        tmp(arg0, arg1, arg2);
      }
      if (0 === arg0) {
        if (onExpand != null) {
          tmp5();
        }
      }
    }, items3);
    const obj3 = { enableDynamicSizing: true, snapPoints: first, maxDynamicContentSize, ref, onChange: callback1, children: closure_20(BottomSheetScrollView, obj4) };
    const tmp2Result = BottomSheetModalDefault;
    const merged1 = Object.assign(merged);
    if (maxDynamicContentSize == null) {
      maxDynamicContentSize = height - tmp4(6261).NAV_BAR_HEIGHT_MULTILINE - top;
    }
    obj4 = { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle, children: closure_20(authStore, obj5) };
    obj5 = { onLayout: callback, style: wrapperStyle, children };
    BottomSheetScrollView = tmp4(6298).BottomSheetScrollView;
    return closure_20(tmp2Result, obj3);
  }
  items = [];
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScrollableBottomSheetInner(onExpand) {
  let borderGradient;
  let children;
  let contentHeight;
  let diff;
  let extraContent;
  let hasEverExpanded;
  let items;
  let maxHeight;
  let onChange;
  let ref;
  let result;
  let startHeight;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let windowDimensions;
  let wrapperStyle;
  const tmp = require;
  const obj = react2;
  const cResult = obj.c(43);
  if (cResult[0] !== onExpand) {
    ({ startHeight, contentHeight, maxHeight, hasEverExpanded, windowDimensions, wrapperStyle, onChange } = onExpand);
    let closure_0 = onChange;
    onExpand = onExpand.onExpand;
    let closure_1 = onExpand;
    ({ children, borderGradient, extraContent, ref } = onExpand);
    const tmp19 = _objectWithoutProperties(onExpand, closure_4);
    cResult[0] = onExpand;
    cResult[1] = maxHeight;
    cResult[2] = borderGradient;
    cResult[3] = children;
    cResult[4] = contentHeight;
    cResult[5] = extraContent;
    cResult[6] = hasEverExpanded;
    cResult[7] = onChange;
    cResult[8] = onExpand;
    cResult[9] = tmp19;
    cResult[10] = ref;
    cResult[11] = startHeight;
    cResult[12] = windowDimensions;
    cResult[13] = wrapperStyle;
    tmp16 = wrapperStyle;
    tmp15 = windowDimensions;
    result = startHeight;
    tmp13 = ref;
    tmp12 = tmp19;
    tmp9 = hasEverExpanded;
    tmp8 = extraContent;
    tmp7 = contentHeight;
    tmp6 = children;
    tmp5 = borderGradient;
    diff = maxHeight;
  } else {
    diff = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    closure_0 = cResult[7];
    closure_1 = cResult[8];
    tmp12 = cResult[9];
    tmp13 = cResult[10];
    result = cResult[11];
    tmp15 = cResult[12];
    tmp16 = cResult[13];
  }
  const height = tmp15.height;
  const tmp20 = closure_22(false);
  const top = useSafeAreaInsetsDefault().top;
  const tmpResult = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = tmpResult.useIsScreenReaderEnabled();
  if (result == null) {
    result = height * unpackModuleId;
  }
  if (diff == null) {
    diff = tmp7;
  }
  if (diff == null) {
    diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top;
  }
  if (cResult[14] === result) {
    if (cResult[15] === tmp9) {
      if (cResult[16] === isScreenReaderEnabled) {
        let arr;
        if (cResult[17] === diff) {
          arr = cResult[18];
        }
        const diff1 = arr.length - 1;
        if (cResult[19] === diff1) {
          if (cResult[20] === tmp10) {
            let tmp28;
            let tmp29;
            if (cResult[21] === tmp11) {
              tmp28 = cResult[22];
            }
            if (cResult[23] !== diff) {
              const obj2 = { maxHeight: diff };
              cResult[23] = diff;
              class L {
                constructor(arg0, arg1, arg2) {
                  if (closure_0 != null) {
                    tmp2 = arg1;
                    tmp3 = arg2;
                    tmpResult = tmp(onExpand, arg1, arg2);
                  }
                  if (onExpand === closure_2) {
                    if (closure_1 != null) {
                      tmp5Result = tmp5();
                    }
                  }
                  return;
                }
              }
              tmp29 = obj2;
            } else {
              tmp29 = cResult[24];
            }
            if (cResult[25] === tmp29) {
              let tmp30;
              if (cResult[26] === tmp16) {
                tmp30 = cResult[27];
              }
              if (cResult[28] === tmp6) {
                let tmp31;
                if (cResult[29] === tmp30) {
                  tmp31 = cResult[30];
                }
                if (cResult[31] === tmp5) {
                  if (cResult[32] === tmp31) {
                    let tmp35;
                    if (cResult[33] === tmp20) {
                      tmp35 = cResult[34];
                    }
                    if (cResult[35] === tmp7) {
                      if (cResult[36] === tmp8) {
                        if (cResult[37] === tmp28) {
                          if (cResult[38] === tmp12) {
                            if (cResult[39] === tmp13) {
                              if (cResult[40] === arr) {
                                let tmp39;
                                if (cResult[41] === tmp35) {
                                  tmp39 = cResult[42];
                                }
                                return tmp39;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj3 = { ref: tmp13, enableDynamicSizing: false, contentHeight: tmp7, snapPoints: arr, onChange: tmp28, children: items };
                    class L {
                      constructor(arg0, arg1, arg2) {
                        if (closure_0 != null) {
                          tmp2 = arg1;
                          tmp3 = arg2;
                          tmpResult = tmp(onExpand, arg1, arg2);
                        }
                        if (onExpand === closure_2) {
                          if (closure_1 != null) {
                            tmp5Result = tmp5();
                          }
                        }
                        return;
                      }
                    }
                    const tmp21Result = BottomSheetModalDefault;
                    const merged = Object.assign(tmp12);
                    items = [tmp35, tmp8];
                    const tmp44 = closure_21(tmp21Result, obj3);
                    cResult[35] = tmp7;
                    cResult[36] = tmp8;
                    cResult[37] = tmp28;
                    cResult[38] = tmp12;
                    cResult[39] = tmp13;
                    cResult[40] = arr;
                    cResult[41] = tmp35;
                    cResult[42] = tmp44;
                    tmp39 = tmp44;
                  }
                }
                let tmp36 = tmp31;
                if (null != tmp5) {
                  const obj4 = { style: tmp20.gradient, start: ConstantsIOS.VerticalGradient.START, end: null, colors: tmp5, children: tmp31 };
                  const tmp21Result2 = LinearGradientDefault;
                  class L {
                    constructor(arg0, arg1, arg2) {
                      if (closure_0 != null) {
                        tmp2 = arg1;
                        tmp3 = arg2;
                        tmpResult = tmp(onExpand, arg1, arg2);
                      }
                      if (onExpand === closure_2) {
                        if (closure_1 != null) {
                          tmp5Result = tmp5();
                        }
                      }
                      return;
                    }
                  }
                  tmp36 = closure_20(tmp21Result2, obj4);
                }
                class L {
                  constructor(arg0, arg1, arg2) {
                    if (closure_0 != null) {
                      tmp2 = arg1;
                      tmp3 = arg2;
                      tmpResult = tmp(onExpand, arg1, arg2);
                    }
                    if (onExpand === closure_2) {
                      if (closure_1 != null) {
                        tmp5Result = tmp5();
                      }
                    }
                    return;
                  }
                }
                cResult[32] = tmp31;
                cResult[33] = tmp20;
                cResult[34] = tmp36;
                tmp35 = tmp36;
              }
              const obj5 = { style: null, children: tmp6 };
              class L {
                constructor(arg0, arg1, arg2) {
                  if (closure_0 != null) {
                    tmp2 = arg1;
                    tmp3 = arg2;
                    tmpResult = tmp(onExpand, arg1, arg2);
                  }
                  if (onExpand === closure_2) {
                    if (closure_1 != null) {
                      tmp5Result = tmp5();
                    }
                  }
                  return;
                }
              }
              const tmp34 = closure_20(authStore, obj5);
              cResult[28] = tmp6;
              cResult[29] = tmp30;
              cResult[30] = tmp34;
              tmp31 = tmp34;
            }
            const items1 = [tmp16, ];
            class L {
              constructor(arg0, arg1, arg2) {
                if (closure_0 != null) {
                  tmp2 = arg1;
                  tmp3 = arg2;
                  tmpResult = tmp(onExpand, arg1, arg2);
                }
                if (onExpand === closure_2) {
                  if (closure_1 != null) {
                    tmp5Result = tmp5();
                  }
                }
                return;
              }
            }
            cResult[25] = tmp29;
            cResult[26] = tmp16;
            cResult[27] = items1;
            tmp30 = items1;
          }
        }
        class L {
          constructor(arg0, arg1, arg2) {
            if (closure_0 != null) {
              tmp2 = arg1;
              tmp3 = arg2;
              tmpResult = tmp(onExpand, arg1, arg2);
            }
            if (onExpand === closure_2) {
              if (closure_1 != null) {
                tmp5Result = tmp5();
              }
            }
            return;
          }
        }
        cResult[19] = diff1;
        cResult[20] = tmp10;
        cResult[21] = tmp11;
        cResult[22] = L;
        tmp28 = L;
      }
    }
  }
  const items2 = [];
  const tmp24 = !isScreenReaderEnabled && !tmp9 && result < diff;
  if (tmp24) {
    items2.push(result);
  }
  items2.push(diff);
  cResult[14] = result;
  cResult[15] = tmp9;
  cResult[16] = isScreenReaderEnabled;
  cResult[17] = diff;
  cResult[18] = items2;
  arr = items2;
}) : (function ScrollableBottomSheetInner(windowDimensions) {
  let children;
  let contentHeight;
  let extraContent;
  let hasEverExpanded;
  let items2;
  let items3;
  let maxHeight;
  let ref;
  let startHeight;
  let wrapperStyle;
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  const borderGradient = windowDimensions.borderGradient;
  ({ wrapperStyle, children, extraContent, ref } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, contentHeight: 0, maxHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, onChange: 0, onExpand: 0, children: 0, borderGradient: 0, extraContent: 0, ref: 0 }));
  startHeight = undefined;
  maxHeight = undefined;
  let c6;
  const tmp5 = require;
  const tmp2 = closure_22(false);
  const top = useSafeAreaInsetsDefault().top;
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * unpackModuleId;
  }
  if (maxHeight == null) {
    maxHeight = contentHeight;
  }
  if (maxHeight == null) {
    maxHeight = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top;
  }
  let items = [hasEverExpanded, isScreenReaderEnabled, maxHeight, startHeight];
  const memo = react.useMemo(() => {
    const items = [];
    const tmp = !isScreenReaderEnabled && !hasEverExpanded && startHeight < maxHeight;
    if (tmp) {
      items.push(startHeight);
    }
    items.push(maxHeight);
    return items;
  }, items);
  const diff = memo.length - 1;
  c6 = diff;
  const items1 = [onChange, onExpand, diff];
  const obj2 = { style: items2, children };
  items2 = [wrapperStyle, { maxHeight }];
  const callback = react.useCallback((arg0, arg1, arg2) => {
    if (onChange != null) {
      tmp(arg0, arg1, arg2);
    }
    if (arg0 === c6) {
      if (onExpand != null) {
        tmp5();
      }
    }
  }, items1);
  const tmp11 = closure_20(authStore, obj2);
  const obj3 = { ref, enableDynamicSizing: false, contentHeight, snapPoints: memo, onChange: callback, children: items3 };
  const tmp3Result = BottomSheetModalDefault;
  const merged1 = Object.assign(merged);
  let tmp10Result = tmp11;
  const tmp10 = closure_20;
  const tmp12 = closure_21;
  if (null != borderGradient) {
    const obj4 = { style: tmp2.gradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: borderGradient, children: tmp11 };
    const tmp3Result2 = LinearGradientDefault;
    tmp10Result = tmp10(tmp3Result2, obj4);
  }
  items3 = [tmp10Result, extraContent];
  return tmp12(tmp3Result, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function Background(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = closure_20(authStore, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function Background(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return closure_20(authStore, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function GradientBackground(arg0) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = closure_22(false);
  if (cResult[0] !== tmp2.backgroundOverlay) {
    const obj2 = { style: tmp2.backgroundOverlay };
    const tmp6 = closure_20(authStore, obj2);
    cResult[0] = tmp2.backgroundOverlay;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === arg0) {
    let tmp7;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = { children: tmp3 };
  const merged = Object.assign(arg0);
  const tmp9 = closure_20(authStore, obj3);
  cResult[2] = arg0;
  cResult[3] = tmp3;
  cResult[4] = tmp9;
  tmp7 = tmp9;
}) : (function GradientBackground(arg0) {
  let obj2;
  const obj = { children: closure_20(authStore, obj2) };
  const tmp = closure_22(false);
  const merged = Object.assign(arg0);
  obj2 = { style: tmp.backgroundOverlay };
  return closure_20(authStore, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConstrainedContainerStyle(width) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const result = Math.max(width.width - closure_12, 0) / 2;
  if (cResult[0] !== result) {
    const obj2 = { marginHorizontal: result };
    cResult[0] = result;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useConstrainedContainerStyle(width) {
  width = width.width;
  const items = [width];
  return react.useMemo(() => {
    const obj = { marginHorizontal: Math.max(width - closure_12, 0) / 2 };
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAnimatedIndex(arg0) {
  let sharedValue = arg0;
  const obj = ReanimatedRexport;
  if (arg0 == null) {
    sharedValue = obj.useSharedValue(-1);
  }
  return sharedValue;
}) : (function useAnimatedIndex(arg0) {
  let sharedValue = arg0;
  const obj = ReanimatedRexport;
  if (arg0 == null) {
    sharedValue = obj.useSharedValue(-1);
  }
  return sharedValue;
});
const __initData = { code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
const __initData2 = { code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
const __initData3 = { code: "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState===\"exiting\"){runOnJS(onLeave)();}}" };
const __initData4 = { code: "function BottomSheetNativeTsx4(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
const __initData5 = { code: "function BottomSheetNativeTsx5(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
const __initData6 = { code: "function BottomSheetNativeTsx6(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function BottomSheet(backdropChildren) {
  let accessibilityLabel;
  let backdropOpacity;
  let backgroundStyles;
  let bodyStyles;
  let borderGradient;
  let children;
  let close;
  let closure_0;
  let closure_11;
  let containerHeight;
  let contentHeight;
  let contentStyles;
  let dismissAccessibilityLabel;
  let extraContent;
  let handleComponent;
  let handleDisabled;
  let header;
  let items;
  let keyboardShouldPersistTaps;
  let maxHeight;
  let obj7;
  let onLeave;
  let opacity;
  let ref;
  let scrollable;
  let showGradient;
  let startExpanded;
  let startHeight;
  let tmp12;
  let tmp13;
  let tmp18;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp7;
  let tmp8;
  let tmp80;
  let tmp9;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(102);
  if (cResult[0] !== backdropChildren) {
    ({ scrollable, startHeight, maxHeight, containerHeight, startExpanded, backdropOpacity } = backdropChildren);
    importDefault = backdropOpacity;
    backdropChildren = backdropChildren.backdropChildren;
    _require = backdropChildren;
    ({ header, handleComponent, handleDisabled, dismissAccessibilityLabel } = backdropChildren);
    dependencyMap = dismissAccessibilityLabel;
    const footer = backdropChildren.footer;
    closure_3 = footer;
    const onExpand = backdropChildren.onExpand;
    closure_5 = onExpand;
    const onDismiss = backdropChildren.onDismiss;
    closure_4 = onDismiss;
    ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, borderGradient, showGradient, extraContent, contentHeight, ref } = backdropChildren);
    const tmp6 = close(backdropChildren, closure_5);
    cResult[0] = backdropChildren;
    cResult[1] = backdropChildren;
    cResult[2] = backdropOpacity;
    cResult[3] = backgroundStyles;
    cResult[4] = bodyStyles;
    cResult[5] = borderGradient;
    cResult[6] = children;
    cResult[7] = containerHeight;
    cResult[8] = contentHeight;
    cResult[9] = contentStyles;
    cResult[10] = dismissAccessibilityLabel;
    cResult[11] = extraContent;
    cResult[12] = footer;
    cResult[13] = handleComponent;
    cResult[14] = header;
    cResult[15] = keyboardShouldPersistTaps;
    cResult[16] = maxHeight;
    cResult[17] = onDismiss;
    cResult[18] = onExpand;
    cResult[19] = tmp6;
    cResult[20] = ref;
    cResult[21] = showGradient;
    cResult[22] = startHeight;
    cResult[23] = scrollable;
    cResult[24] = startExpanded;
    cResult[25] = handleDisabled;
    tmp7 = handleDisabled;
    tmp8 = startExpanded;
    tmp9 = scrollable;
    tmp12 = ref;
    tmp13 = tmp6;
    tmp18 = header;
    tmp23 = contentStyles;
    tmp26 = children;
    tmp27 = borderGradient;
    tmp28 = bodyStyles;
    tmp29 = backgroundStyles;
    tmp30 = backdropOpacity;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp29 = cResult[3];
    tmp28 = cResult[4];
    tmp27 = cResult[5];
    tmp26 = cResult[6];
    tmp23 = cResult[9];
    dependencyMap = cResult[10];
    closure_3 = cResult[12];
    tmp18 = cResult[14];
    closure_4 = cResult[17];
    closure_5 = cResult[18];
    tmp13 = cResult[19];
    tmp12 = cResult[20];
    tmp9 = cResult[23];
    tmp8 = cResult[24];
    tmp7 = cResult[25];
  }
  let obj2 = onLeave;
  const context = onLeave.useContext(reactDefault);
  const transitionState = context.transitionState;
  close = context.close;
  onLeave = context.onLeave;
  const registerDismissHandler = context.registerDismissHandler;
  const tmp37 = useSafeAreaInsetsDefault();
  const tmp38 = closure_22(undefined !== tmp7 && tmp7, Math.max(tmp37.bottom, closure_19), undefined !== tmp9 && tmp9);
  const ref1 = onLeave.useRef(null);
  [r10121, closure_11] = transitionState(onLeave.useState(undefined !== tmp8 && tmp8), 2);
  transitionState(onLeave.useState(undefined !== tmp8 && tmp8), 2);
  closure_12 = onLeave.useRef(false);
  ref = onLeave.useRef(true);
  onLeave.useContext(tmp(4794).AccessibilityPreferencesContext).reducedMotion.enabled ? closure_14 : ref;
  if (cResult[26] === tmp15) {
    let tmp42;
    let tmp43;
    if (cResult[27] === registerDismissHandler) {
      tmp42 = cResult[28];
      tmp43 = cResult[29];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp42, tmp43);
    let tmpResult = tmp(6832);
    const bottomSheetImperativeHandle = tmpResult.useBottomSheetImperativeHandle(tmp12, ref1);
    if (cResult[30] === close) {
      let tmp46;
      let tmp47;
      if (cResult[31] === transitionState) {
        tmp46 = cResult[32];
        tmp47 = cResult[33];
      }
      const effect = obj2.useEffect(tmp46, tmp47);
      if (cResult[34] === tmp15) {
        let tmp49;
        if (cResult[35] === onLeave) {
          tmp49 = cResult[36];
        }
        const tmpResult4 = tmp(5392);
        const unmountEffect = tmpResult4.useUnmountEffect(tmp49);
        if (cResult[37] !== close) {
          function ie(arg0, arg1, arg2, arg3, arg4) {
            if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
              if (-1 === arg1) {
                if (!closure_12.current) {
                  tmp2.current = true;
                  close();
                }
              }
              const current = arg1 > -1 && closure_12.current;
              if (current) {
                const current2 = ref1.current;
                if (current2 != null) {
                  current2.forceClose();
                }
              }
            }
          }
          cResult[37] = close;
          cResult[38] = ie;
        }
        if (cResult[39] !== tmp14) {
          class He {
            constructor() {
              closure_11(true);
              if (closure_5 != null) {
                closure_5();
              }
            }
          }
          cResult[39] = tmp14;
          cResult[40] = He;
        } else {
          class He {
            constructor() {
              closure_11(true);
              if (closure_5 != null) {
                closure_5();
              }
            }
          }
        }
        const tmp54 = closure_28(tmp13.animatedIndex);
        closure_14 = tmp54;
        function ke() {
          return closure_14.get() <= -1;
        }
        const obj3 = { animatedIndex: tmp54 };
        ke.__closure = obj3;
        ke.__workletHash = 4341912681188;
        ke.__initData = __initData;
        const tmpResult5 = tmp(4810);
        const derivedValue = tmpResult5.useDerivedValue(ke);
        const tmpResult6 = tmp(4810);
        class Oe {
          constructor() {
            return derivedValue.get();
          }
        }
        const obj4 = { animatedIsVisuallyClosed: derivedValue };
        Oe.__closure = obj4;
        Oe.__workletHash = 6995719052506;
        Oe.__initData = __initData2;
        class De {
          constructor(arg0) {
            const tmp = arg0 && "exiting" === transitionState;
            if (tmp) {
              const obj = ReanimatedRexport;
              obj.runOnJS(onLeave)();
            }
          }
        }
        const useAnimatedReaction = tmpResult6.useAnimatedReaction;
        De.__closure = { transitionState, runOnJS: tmp(4810).runOnJS, onLeave };
        De.__workletHash = 1921852093213;
        De.__initData = __initData3;
        const obj5 = { transitionState, runOnJS: tmp(4810).runOnJS, onLeave };
        const animatedReaction = useAnimatedReaction(Oe, De);
        if (cResult[41] !== tmp22) {
          class Be {
            constructor() {
              obj = {
                accessibilityLabel: closure_2,
                onPress() {
                              const current = ref.current;
                              if (current != null) {
                                current.close();
                              }
                            }
              };
              return jsx(closure_0(closure_2[22]).ActionSheetHeaderBar, obj);
            }
          }
          cResult[41] = tmp22;
          cResult[42] = Be;
        } else {
          class Be {
            constructor() {
              obj = {
                accessibilityLabel: closure_2,
                onPress() {
                              const current = ref.current;
                              if (current != null) {
                                current.close();
                              }
                            }
              };
              return jsx(closure_0(closure_2[22]).ActionSheetHeaderBar, obj);
            }
          }
        }
        if (cResult[43] === tmp31) {
          let tmp64;
          class Be {
            constructor() {
              obj = {
                accessibilityLabel: closure_2,
                onPress() {
                              const current = ref.current;
                              if (current != null) {
                                current.close();
                              }
                            }
              };
              return jsx(closure_0(closure_2[22]).ActionSheetHeaderBar, obj);
            }
          }
          if (cResult[46] !== tmp20) {
            class Me {
              constructor(arg0) {
                let tmpResult;
                const obj = { children: tmpResult };
                const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                const merged = Object.assign(arg0);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(NavScrim.NavScrim, {});
                }
                return closure_20(BottomSheetFooter, obj);
              }
            }
            cResult[46] = tmp20;
            cResult[47] = Me;
          } else {
            class Me {
              constructor(arg0) {
                let tmpResult;
                const obj = { children: tmpResult };
                const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                const merged = Object.assign(arg0);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(NavScrim.NavScrim, {});
                }
                return closure_20(BottomSheetFooter, obj);
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
            class Me {
              constructor(arg0) {
                let tmpResult;
                const obj = { children: tmpResult };
                const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                const merged = Object.assign(arg0);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(NavScrim.NavScrim, {});
                }
                return closure_20(BottomSheetFooter, obj);
              }
            }
            cResult[48] = tmp65;
            tmp64 = tmp65;
          } else {
            class Me {
              constructor(arg0) {
                let tmpResult;
                const obj = { children: tmpResult };
                const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                const merged = Object.assign(arg0);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(NavScrim.NavScrim, {});
                }
                return closure_20(BottomSheetFooter, obj);
              }
            }
          }
          const tmp66 = useWindowDimensionsDefault(tmp64);
          closure_27(tmp66);
          useColorThemeBackgroundDefault();
          if (tmp13.backgroundComponent == null) {
            class Me {
              constructor(arg0) {
                let tmpResult;
                const obj = { children: tmpResult };
                const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                const merged = Object.assign(arg0);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(NavScrim.NavScrim, {});
                }
                return closure_20(BottomSheetFooter, obj);
              }
            }
          }
          if (cResult[49] === tmp38.wrapper) {
            class Me {
              constructor(arg0) {
                let tmpResult;
                const obj = { children: tmpResult };
                const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                const merged = Object.assign(arg0);
                tmpResult = closure_3;
                if (closure_3 == null) {
                  tmpResult = tmp(NavScrim.NavScrim, {});
                }
                return closure_20(BottomSheetFooter, obj);
              }
            }
            if (cResult[52] === tmp29) {
              class Me {
                constructor(arg0) {
                  let tmpResult;
                  const obj = { children: tmpResult };
                  const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                  const merged = Object.assign(arg0);
                  tmpResult = closure_3;
                  if (closure_3 == null) {
                    tmpResult = tmp(NavScrim.NavScrim, {});
                  }
                  return closure_20(BottomSheetFooter, obj);
                }
              }
              if (undefined !== tmp9 && tmp9) {
                class Me {
                  constructor(arg0) {
                    let tmpResult;
                    const obj = { children: tmpResult };
                    const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                    const merged = Object.assign(arg0);
                    tmpResult = closure_3;
                    if (closure_3 == null) {
                      tmpResult = tmp(NavScrim.NavScrim, {});
                    }
                    return closure_20(BottomSheetFooter, obj);
                  }
                }
              }
              if (!(undefined !== tmp7 && tmp7)) {
                class Me {
                  constructor(arg0) {
                    let tmpResult;
                    const obj = { children: tmpResult };
                    const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                    const merged = Object.assign(arg0);
                    tmpResult = closure_3;
                    if (closure_3 == null) {
                      tmpResult = tmp(NavScrim.NavScrim, {});
                    }
                    return closure_20(BottomSheetFooter, obj);
                  }
                }
              }
              if (cResult[55] === tmp23) {
                class Me {
                  constructor(arg0) {
                    let tmpResult;
                    const obj = { children: tmpResult };
                    const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                    const merged = Object.assign(arg0);
                    tmpResult = closure_3;
                    if (closure_3 == null) {
                      tmpResult = tmp(NavScrim.NavScrim, {});
                    }
                    return closure_20(BottomSheetFooter, obj);
                  }
                }
                if (cResult[58] === tmp18) {
                  class Me {
                    constructor(arg0) {
                      let tmpResult;
                      const obj = { children: tmpResult };
                      const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                      const merged = Object.assign(arg0);
                      tmpResult = closure_3;
                      if (closure_3 == null) {
                        tmpResult = tmp(NavScrim.NavScrim, {});
                      }
                      return closure_20(BottomSheetFooter, obj);
                    }
                  }
                  if (cResult[61] === tmp28) {
                    class Me {
                      constructor(arg0) {
                        let tmpResult;
                        const obj = { children: tmpResult };
                        const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                        const merged = Object.assign(arg0);
                        tmpResult = closure_3;
                        if (closure_3 == null) {
                          tmpResult = tmp(NavScrim.NavScrim, {});
                        }
                        return closure_20(BottomSheetFooter, obj);
                      }
                    }
                    if (cResult[64] === tmp26) {
                      class Me {
                        constructor(arg0) {
                          let tmpResult;
                          const obj = { children: tmpResult };
                          const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                          const merged = Object.assign(arg0);
                          tmpResult = closure_3;
                          if (closure_3 == null) {
                            tmpResult = tmp(NavScrim.NavScrim, {});
                          }
                          return closure_20(BottomSheetFooter, obj);
                        }
                      }
                      if (cResult[67] === tmp75) {
                        class Me {
                          constructor(arg0) {
                            let tmpResult;
                            const obj = { children: tmpResult };
                            const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                            const merged = Object.assign(arg0);
                            tmpResult = closure_3;
                            if (closure_3 == null) {
                              tmpResult = tmp(NavScrim.NavScrim, {});
                            }
                            return closure_20(BottomSheetFooter, obj);
                          }
                        }
                      }
                      const obj6 = { children: closure_21(ref1, obj7) };
                      obj7 = { style: tmp75, children: items };
                      items = [tmp76, tmp80];
                      const LayerScope = tmp(6835).LayerScope;
                      cResult[67] = tmp75;
                      cResult[68] = tmp76;
                      const tmp88 = closure_20(LayerScope, obj6);
                      class Oe {
                        constructor() {
                          return derivedValue.get();
                        }
                      }
                      cResult[70] = tmp88;
                    }
                    const obj8 = { style: tmp79, children: tmp26 };
                    const tmp83 = closure_20(ref1, obj8);
                    cResult[64] = tmp26;
                    cResult[65] = tmp79;
                    cResult[66] = tmp83;
                    tmp80 = tmp83;
                  }
                  let items1 = [tmp38.body, tmp28];
                  cResult[61] = tmp28;
                  cResult[62] = tmp38.body;
                  cResult[63] = items1;
                }
                let tmp77 = null != tmp18;
                if (tmp77) {
                  class Me {
                    constructor(arg0) {
                      let tmpResult;
                      const obj = { children: tmpResult };
                      const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
                      const merged = Object.assign(arg0);
                      tmpResult = closure_3;
                      if (closure_3 == null) {
                        tmpResult = tmp(NavScrim.NavScrim, {});
                      }
                      return closure_20(BottomSheetFooter, obj);
                    }
                  }
                  const obj9 = { style: tmp38.header, children: tmp18 };
                  tmp77 = closure_20(ref1, obj9);
                }
                cResult[58] = tmp18;
                cResult[59] = tmp38.header;
                cResult[60] = tmp77;
              }
              const items2 = [tmp38.content, tmp23];
              cResult[55] = tmp23;
              cResult[56] = tmp38.content;
              cResult[57] = items2;
            }
            const items3 = [tmp38.background, tmp29];
            cResult[52] = tmp29;
            cResult[53] = tmp38.background;
            cResult[54] = items3;
          }
          const items4 = [tmp38.wrapper, null != tmp27 && tmp38.wrapperWithBorder];
          cResult[49] = tmp38.wrapper;
          class Oe {
            constructor() {
              return derivedValue.get();
            }
          }
          cResult[50] = null != tmp27 && tmp38.wrapperWithBorder;
          cResult[51] = items4;
        }
        class Le {
          constructor(animatedIndex) {
            let items;
            let items1;
            const obj = { style: items, children: items1 };
            items = [React4.absoluteFill, animatedIndex.style];
            items1 = [, ];
            const obj2 = { animatedIndex: animatedIndex.animatedIndex, opacity };
            items1[0] = closure_20(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, obj2);
            items1[1] = closure_0;
            return closure_21(authStore, obj);
          }
        }
        cResult[43] = tmp31;
        cResult[44] = tmp30;
        cResult[45] = Le;
      }
      function oe() {
        if (ref.current) {
          if (closure_4 != null) {
            tmp();
          }
        }
        onLeave();
      }
      cResult[34] = tmp15;
      cResult[35] = onLeave;
      cResult[36] = oe;
      tmp49 = oe;
    }
    function re() {
      let current = "exiting" !== transitionState;
      const tmp = transitionState;
      if (!current) {
        current = closure_12.current;
      }
      if (!current) {
        ref.current = false;
        const current2 = ref1.current;
        if (current2 != null) {
          current2.forceClose();
        }
      }
      const current3 = "visible" === tmp && closure_12.current;
      if (current3) {
        close();
      }
    }
    const items5 = [transitionState, close];
    cResult[30] = close;
    cResult[31] = transitionState;
    cResult[32] = re;
    cResult[33] = items5;
    tmp47 = items5;
    tmp46 = re;
  }
  function te() {
    registerDismissHandler(closure_4);
  }
  const items6 = [tmp15, registerDismissHandler];
  cResult[26] = tmp15;
  cResult[27] = registerDismissHandler;
  cResult[28] = te;
  cResult[29] = items6;
  tmp43 = items6;
  tmp42 = te;
}) : (function BottomSheet(scrollable) {
  let LayerScope;
  let backgroundStyles;
  let bodyStyles;
  let borderGradient;
  let children;
  let containerHeight;
  let contentHeight;
  let contentStyles;
  let extraContent;
  let handleComponent;
  let handleDisabled;
  let header;
  let items10;
  let items11;
  let items7;
  let items8;
  let items9;
  let keyboardShouldPersistTaps;
  let maxHeight;
  let obj6;
  let ref;
  let showGradient;
  let startExpanded;
  let startHeight;
  let str;
  let tmp29;
  let tmp9Result8;
  let flag = scrollable.scrollable;
  if (flag === undefined) {
    flag = false;
  }
  ({ startExpanded, startHeight, maxHeight, containerHeight } = scrollable);
  if (startExpanded === undefined) {
    startExpanded = false;
  }
  const backdropOpacity = scrollable.backdropOpacity;
  const backdropChildren = scrollable.backdropChildren;
  ({ header, handleComponent, handleDisabled } = scrollable);
  if (handleDisabled === undefined) {
    handleDisabled = false;
  }
  const dismissAccessibilityLabel = scrollable.dismissAccessibilityLabel;
  const footer = scrollable.footer;
  const onExpand = scrollable.onExpand;
  const onDismiss = scrollable.onDismiss;
  ({ borderGradient, showGradient } = scrollable);
  ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight, ref } = scrollable);
  let merged = Object.assign(scrollable, Object.assign({ scrollable: 0, startHeight: 0, maxHeight: 0, containerHeight: 0, startExpanded: 0, backdropOpacity: 0, backdropChildren: 0, header: 0, handleComponent: 0, handleDisabled: 0, dismissAccessibilityLabel: 0, footer: 0, onExpand: 0, onDismiss: 0, keyboardShouldPersistTaps: 0, children: 0, backgroundStyles: 0, contentStyles: 0, bodyStyles: 0, borderGradient: 0, showGradient: 0, extraContent: 0, contentHeight: 0, ref: 0 }));
  let onLeave;
  let closure_14;
  let obj = onLeave;
  let tmp2 = backdropChildren;
  const context = onLeave.useContext(backdropChildren(dismissAccessibilityLabel[18]));
  const transitionState = context.transitionState;
  const close = context.close;
  onLeave = context.onLeave;
  const registerDismissHandler = context.registerDismissHandler;
  const rect = backdropChildren(dismissAccessibilityLabel[11])();
  const top = rect.top;
  const tmp5 = closure_22(handleDisabled, Math.max(rect.bottom, closure_19), flag);
  const ref1 = onLeave.useRef(null);
  const tmp7 = transitionState(onLeave.useState(startExpanded), 2);
  let closure_11 = tmp7[1];
  const first = tmp7[0];
  closure_12 = onLeave.useRef(false);
  ref = onLeave.useRef(true);
  let items = [onDismiss, registerDismissHandler];
  const tmp10 = onLeave.useContext(backdropOpacity(dismissAccessibilityLabel[19]).AccessibilityPreferencesContext).reducedMotion.enabled ? closure_14 : ref;
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  const tmp9Result = backdropOpacity(dismissAccessibilityLabel[20]);
  const bottomSheetImperativeHandle = tmp9Result.useBottomSheetImperativeHandle(ref, ref1);
  let items1 = [transitionState, close];
  const effect = obj.useEffect(() => {
    let current = "exiting" !== transitionState;
    const tmp = transitionState;
    if (!current) {
      current = closure_12.current;
    }
    if (!current) {
      ref.current = false;
      const current2 = ref1.current;
      if (current2 != null) {
        current2.forceClose();
      }
    }
    const current3 = "visible" === tmp && closure_12.current;
    if (current3) {
      close();
    }
  }, items1);
  const tmp9Result5 = backdropOpacity(dismissAccessibilityLabel[21]);
  const unmountEffect = tmp9Result5.useUnmountEffect(() => {
    if (ref.current) {
      if (onDismiss != null) {
        tmp();
      }
    }
    onLeave();
  });
  const items2 = [close];
  const items3 = [onExpand];
  const callback = obj.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
      if (-1 === arg1) {
        if (!closure_12.current) {
          tmp2.current = true;
          close();
        }
      }
      const current = arg1 > -1 && closure_12.current;
      if (current) {
        const current2 = ref1.current;
        if (current2 != null) {
          current2.forceClose();
        }
      }
    }
  }, items2);
  const callback1 = obj.useCallback(() => {
    closure_11(true);
    if (onExpand != null) {
      onExpand();
    }
  }, items3);
  const tmp17 = closure_28(merged.animatedIndex);
  closure_14 = tmp17;
  function be() {
    return closure_14.get() <= -1;
  }
  be.__closure = { animatedIndex: tmp17 };
  be.__workletHash = 11856440255681;
  be.__initData = __initData4;
  const tmp9Result6 = backdropOpacity(dismissAccessibilityLabel[17]);
  const derivedValue = tmp9Result6.useDerivedValue(be);
  function pe() {
    return derivedValue.get();
  }
  pe.__closure = { animatedIsVisuallyClosed: derivedValue };
  pe.__workletHash = 888700167933;
  pe.__initData = __initData5;
  function me(arg0) {
    const tmp = arg0 && "exiting" === transitionState;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(onLeave)();
    }
  }
  const tmp9Result7 = backdropOpacity(dismissAccessibilityLabel[17]);
  let obj2 = { transitionState, runOnJS: tmp9(tmp3[17]).runOnJS, onLeave };
  me.__closure = obj2;
  me.__workletHash = 9237161324088;
  me.__initData = __initData6;
  const animatedReaction = tmp9Result7.useAnimatedReaction(pe, me);
  const items4 = [dismissAccessibilityLabel];
  const items5 = [backdropOpacity, backdropChildren];
  const callback2 = obj.useCallback(() => {
    const obj = {
      accessibilityLabel: dismissAccessibilityLabel,
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.close();
        }
      }
    };
    return closure_20(ActionSheetHeaderBar.ActionSheetHeaderBar, obj);
  }, items4);
  const items6 = [footer];
  const callback3 = obj.useCallback((animatedIndex) => {
    let items;
    let items1;
    const obj = { style: items, children: items1 };
    items = [React4.absoluteFill, animatedIndex.style];
    items1 = [, ];
    const obj2 = { animatedIndex: animatedIndex.animatedIndex, opacity: backdropOpacity };
    items1[0] = closure_20(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, obj2);
    items1[1] = backdropChildren;
    return closure_21(authStore, obj);
  }, items5);
  const callback4 = obj.useCallback((arg0) => {
    let tmpResult;
    const obj = { children: tmpResult };
    const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
    const merged = Object.assign(arg0);
    tmpResult = footer;
    if (footer == null) {
      tmpResult = tmp(NavScrim.NavScrim, {});
    }
    return closure_20(BottomSheetFooter, obj);
  }, items6);
  const tmp23 = tmp2(dismissAccessibilityLabel[25])({ ignoreKeyboard: true });
  const tmp24 = closure_27(tmp23);
  const tmp25 = flag ? closure_24 : closure_23;
  const tmp26 = tmp2(dismissAccessibilityLabel[26])();
  let backgroundComponent = merged.backgroundComponent;
  if (backgroundComponent == null) {
    backgroundComponent = showGradient ? closure_26 : closure_25;
  }
  const obj3 = { ref: ref1, accessible: !tmp9Result8.isIOS() && undefined, accessibilityRole: "none", accessibilityLabel: "", startHeight, contentHeight, maxHeight, containerHeight, startExpanded, hasEverExpanded: first, windowDimensions: tmp23, wrapperStyle: items7, onExpand: callback1, enablePanDownToClose: true, containerStyle: tmp24, backgroundStyle: items8, topInset: top, keyboardBehavior: str, keyboardBlurBehavior: "restore", keyboardShouldPersistTaps, animationConfigs: tmp10, overrideReduceMotion: backdropOpacity(dismissAccessibilityLabel[17]).ReduceMotion.Never, handleIndicatorStyle: tmp5.handleIndicator, handleComponent: tmp29, backdropComponent: callback3, backgroundComponent, renderFooter: callback4, animatedIndex: tmp17, onAnimate: callback, onClose: onLeave, borderGradient, extraContent, children: closure_20(LayerScope, obj6) };
  tmp9Result8 = backdropOpacity(dismissAccessibilityLabel[8]);
  items7 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
  items8 = [tmp5.background, backgroundStyles];
  str = "interactive";
  tmp9Result8.isIOS();
  if (flag) {
    str = "extend";
  }
  tmp29 = null;
  if (!handleDisabled) {
    if (handleComponent == null) {
      handleComponent = callback2;
    }
    tmp29 = handleComponent;
  }
  const obj4 = { style: items9, children: items10 };
  items9 = [tmp5.content, contentStyles];
  let tmp27Result = null != header;
  LayerScope = tmp9(tmp3[27]).LayerScope;
  const tmp30 = closure_21;
  if (tmp27Result) {
    const obj5 = { style: tmp5.header, children: header };
    tmp27Result = tmp27(tmp31, obj5);
  }
  items10 = [tmp27Result, ];
  const obj7 = { style: items11, children };
  items11 = [tmp5.body, bodyStyles];
  obj6 = { children: tmp30(ref1, obj4) };
  items10[1] = closure_20(ref1, obj7);
  const tmp27Result3 = closure_20(tmp25, obj3);
  let tmp27Result4 = tmp27Result3;
  if (showGradient) {
    let tmp35 = tmp26;
    const ThemeContextProvider = tmp9(tmp3[28]).ThemeContextProvider;
    if (tmp26 == null) {
      tmp35 = null;
    }
    const obj8 = { gradient: tmp35, children: tmp27Result3 };
    tmp27Result4 = tmp27(ThemeContextProvider, obj8);
  }
  return tmp27Result4;
});
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export const BottomSheet = tmp5;
