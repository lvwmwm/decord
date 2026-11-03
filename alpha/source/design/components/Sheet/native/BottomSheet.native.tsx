// Module ID: 5395
// Function ID: 5396
// Name: Sheet/BottomSheet
// Dependencies: [32, 19, 17, 5396, 21, 5141, 575, 1377, 1627, 5397, 5398, 5709, 5710, 1092, 1493, 1652, 5714, 5155, 5715, 5716, 1705, 5718, 5720, 5729, 5317, 5734, 5207, 2]
// Exports: BottomSheet, useBottomSheetContainerStyle, useBottomSheetWidth

// Module 5395 (Sheet/BottomSheet)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5397 */;
import BottomSheetModal from "BottomSheetModal" /* 5398 */;
import LinearGradientDefault from "LinearGradient" /* 5710 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5718 */;
import Sheet_BottomSheetBackdrop from "Sheet/BottomSheetBackdrop" /* 5720 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5396 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let Platform;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp2;
let tmp4;
let unpackModuleId;
const BottomSheetModalDefault = tmp2(5398);
const NavigatorConstants = tmp4(5709);
const NavScrim = tmp2(5729);
function Background(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return authStore4(metroRequire, obj);
}
function GradientBackground(arg0) {
  let obj2;
  const obj = { children: authStore4(metroRequire, obj2) };
  const tmp = closure_18(false);
  const merged = Object.assign(arg0);
  obj2 = { style: tmp.backgroundOverlay };
  return authStore4(metroRequire, obj);
}
function BorderGradientBackground(borderGradient) {
  let items;
  let items1;
  borderGradient = borderGradient.borderGradient;
  const merged = Object.assign(borderGradient, Object.assign({ borderGradient: 0 }));
  const tmp2 = closure_18(false);
  let flattenResult = hasOwnProperty.flatten(merged.style);
  if (flattenResult == null) {
    flattenResult = {};
  }
  const backgroundColor = flattenResult.backgroundColor;
  const obj = { children: items };
  const merged1 = Object.assign(merged);
  const obj2 = { style: tmp2.gradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: borderGradient };
  const tmp4 = LinearGradientDefault;
  items = [authStore4(tmp4, obj2), ];
  const obj3 = { style: items1 };
  items1 = [tmp2.gradientInnerFill, { backgroundColor }];
  items[1] = authStore4(metroRequire, obj3);
  return closure_17(metroRequire, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire, Platform } = react_native);
({ ACTION_SHEET_START_HEIGHT_RATIO: metroImportDefault, ACTION_SHEET_MAX_WIDTH: metroImportAll, ACTION_SHEET_SPRING_CONFIG: c9, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: c10, ACTION_SHEET_GRADIENT_BORDER_WIDTH: unpackModuleId, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_12, ACTION_SHEET_BORDER_RADIUS: map1, ACTION_SHEET_INNER_BORDER_RADIUS: closure_14, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_15 } = ActionSheetConstants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles((arg0) => {
  let num2;
  let obj4;
  let obj5;
  let obj8;
  let rect;
  let str;
  let str2;
  let tmp6;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = { background: { overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, wrapper: { overflow: "hidden", flex: 1 }, wrapperWithBorder: { overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: obj4, gradient: obj5, gradientInnerFill: rect, handleIndicator: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, backgroundOverlay: obj8, header: { marginBottom: 16 }, body: { flex: 1 } };
  ({ overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  let tmp5;
  ({ overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  if (arg0) {
    tmp5 = tmp;
  }
  obj4 = { borderTopLeftRadius: tmp5, borderTopRightRadius: tmp6, overflow: str, marginBottom: num2, flex: 1 };
  tmp6 = undefined;
  if (arg0) {
    tmp6 = tmp;
  }
  str = undefined;
  if (arg0) {
    str = "hidden";
  }
  num2 = 0;
  if (!flag) {
    num2 = num + 4;
  }
  obj5 = { overflow: str2, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  str2 = undefined;
  const obj6 = PlatformUtils;
  const tmp7 = hasOwnProperty;
  if (obj6.isIOS()) {
    str2 = "hidden";
  }
  rect = { position: "absolute", top: tmp4, left: tmp4, right: tmp4, bottom: 0, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius };
  obj8 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
  const merged1 = Object.assign(tmp7.absoluteFillObject);
  return obj;
});
function ContentSizeBottomSheetInner(windowDimensions) {
  let BottomSheetScrollView;
  let children;
  let closure_4;
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
    startHeight = height * metroImportDefault;
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
    const obj3 = { enableDynamicSizing: true, snapPoints: first, maxDynamicContentSize, ref, onChange: callback1, children: authStore4(BottomSheetScrollView, obj4) };
    const tmp2Result = BottomSheetModalDefault;
    const merged1 = Object.assign(merged);
    if (maxDynamicContentSize == null) {
      maxDynamicContentSize = height - tmp4(5709).NAV_BAR_HEIGHT_MULTILINE - top;
    }
    obj4 = { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle, children: authStore4(metroRequire, obj5) };
    obj5 = { onLayout: callback, style: wrapperStyle, children };
    BottomSheetScrollView = tmp4(5398).BottomSheetScrollView;
    return authStore4(tmp2Result, obj3);
  }
  items = [];
}
function ScrollableBottomSheetInner(windowDimensions) {
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
  ({ wrapperStyle, children, extraContent, ref } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, contentHeight: 0, maxHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, onChange: 0, onExpand: 0, children: 0, extraContent: 0, ref: 0 }));
  startHeight = undefined;
  maxHeight = undefined;
  let c6;
  const top = useSafeAreaInsetsDefault().top;
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * metroImportDefault;
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
  const obj3 = { ref, enableDynamicSizing: false, contentHeight, snapPoints: memo, onChange: callback, children: items3 };
  const tmp9 = authStore4(metroRequire, obj2);
  const tmp2Result = BottomSheetModalDefault;
  const merged1 = Object.assign(merged);
  items3 = [tmp9, extraContent];
  return closure_17(tmp2Result, obj3);
}
let closure_24 = { code: "(function BottomSheetNativeTsx1(){let[animatedIndex]=this.__closure;return animatedIndex.get()<=-1;})" };
let closure_25 = { code: "(function BottomSheetNativeTsx2(){let[animatedIsVisuallyClosed]=this.__closure;return animatedIsVisuallyClosed.get();})" };
let closure_26 = { code: "(function BottomSheetNativeTsx3(isVisuallyClosed){let[transitionState,scheduleOnRN,onLeave]=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){scheduleOnRN(onLeave);}})" };
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export function useBottomSheetContainerStyle(width) {
  width = width.width;
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const result = Math.max(width - metroImportAll, 0) / 2;
  let c2 = result;
  const items = [result, left, right];
  return react.useMemo(() => {
    const obj = { marginLeft: Math.max(c2, left), marginRight: Math.max(c2, right) };
    return obj;
  }, items);
}
export function useBottomSheetWidth() {
  const tmp = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const width = tmp.width;
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const result = Math.max(width - metroImportAll, 0) / 2;
  let c2 = result;
  const items = [result, left, right];
  const memo = react.useMemo(() => {
    const obj = { marginLeft: Math.max(c2, left), marginRight: Math.max(c2, right) };
    return obj;
  }, items);
  return tmp.width - memo.marginLeft - memo.marginRight;
}
export function BottomSheet(scrollable) {
  let LayerScope;
  let backgroundStyles;
  let bodyStyles;
  let children;
  let containerHeight;
  let contentHeight;
  let contentStyles;
  let extraContent;
  let handleComponent;
  let handleDisabled;
  let header;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let keyboardShouldPersistTaps;
  let maxHeight;
  let obj5;
  let ref;
  let startExpanded;
  let startHeight;
  let str;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp38;
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
  const borderGradient = scrollable.borderGradient;
  const showGradient = scrollable.showGradient;
  ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight, ref } = scrollable);
  let merged = Object.assign(scrollable, Object.assign({ scrollable: 0, startHeight: 0, maxHeight: 0, containerHeight: 0, startExpanded: 0, backdropOpacity: 0, backdropChildren: 0, header: 0, handleComponent: 0, handleDisabled: 0, dismissAccessibilityLabel: 0, footer: 0, onExpand: 0, onDismiss: 0, keyboardShouldPersistTaps: 0, children: 0, backgroundStyles: 0, contentStyles: 0, bodyStyles: 0, borderGradient: 0, showGradient: 0, extraContent: 0, contentHeight: 0, ref: 0 }));
  let obj = onExpand;
  let tmp2 = backdropChildren;
  const context = onExpand.useContext(backdropChildren(dismissAccessibilityLabel[16]));
  const transitionState = context.transitionState;
  const close = context.close;
  const onLeave = context.onLeave;
  const registerDismissHandler = context.registerDismissHandler;
  const rect = backdropChildren(dismissAccessibilityLabel[8])();
  const top = rect.top;
  const tmp5 = closure_18(handleDisabled, Math.max(rect.bottom, closure_15), flag);
  const ref1 = onExpand.useRef(null);
  const tmp7 = footer(onExpand.useState(startExpanded), 2);
  let closure_12 = tmp7[1];
  const first = tmp7[0];
  let closure_13 = onExpand.useRef(false);
  ref = onExpand.useRef(true);
  let items = [onDismiss, registerDismissHandler];
  const tmp10 = onExpand.useContext(backdropOpacity(dismissAccessibilityLabel[17]).AccessibilityPreferencesContext).reducedMotion.enabled ? registerDismissHandler : onLeave;
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  const tmp9Result = backdropOpacity(dismissAccessibilityLabel[18]);
  const bottomSheetImperativeHandle = tmp9Result.useBottomSheetImperativeHandle(ref, ref1);
  let items1 = [transitionState, close];
  const effect = obj.useEffect(() => {
    let current = "exiting" !== transitionState;
    const tmp = transitionState;
    if (!current) {
      current = closure_13.current;
    }
    if (!current) {
      ref.current = false;
      const current2 = ref1.current;
      if (current2 != null) {
        current2.forceClose();
      }
    }
    const current3 = "visible" === tmp && closure_13.current;
    if (current3) {
      close();
    }
  }, items1);
  const tmp9Result5 = backdropOpacity(dismissAccessibilityLabel[19]);
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
        if (!closure_13.current) {
          tmp2.current = true;
          close();
        }
      }
      const current = arg1 > -1 && closure_13.current;
      if (current) {
        const current2 = ref1.current;
        if (current2 != null) {
          current2.forceClose();
        }
      }
    }
  }, items2);
  let animatedIndex = merged.animatedIndex;
  const callback1 = obj.useCallback(() => {
    closure_12(true);
    if (onExpand != null) {
      onExpand();
    }
  }, items3);
  const tmp9Result6 = backdropOpacity(dismissAccessibilityLabel[15]);
  if (animatedIndex == null) {
    animatedIndex = tmp9Result6.useSharedValue(-1);
  }
  const items4 = [closure_24, animatedIndex];
  let c0;
  [tmp17, tmp18] = items4;
  const tmp9Result7 = backdropOpacity(dismissAccessibilityLabel[15]);
  class BottomSheetNativeTsx1 {
    constructor() {
      return _undefined.get() <= -1;
    }
  }
  const items5 = [tmp18];
  BottomSheetNativeTsx1.__closure = items5;
  BottomSheetNativeTsx1.__workletHash = 4031587621117;
  BottomSheetNativeTsx1.__initData = tmp17;
  const derivedValue = tmp9Result7.useDerivedValue(BottomSheetNativeTsx1);
  const items6 = [closure_25, derivedValue];
  c0 = undefined;
  [tmp21, tmp22] = items6;
  const tmp9Result8 = backdropOpacity(dismissAccessibilityLabel[15]);
  class BottomSheetNativeTsx2 {
    constructor() {
      return _undefined.get();
    }
  }
  const items7 = [tmp22];
  BottomSheetNativeTsx2.__closure = items7;
  BottomSheetNativeTsx2.__workletHash = 8974006408707;
  BottomSheetNativeTsx2.__initData = tmp21;
  const items8 = [closure_26, transitionState, , ];
  const useAnimatedReaction = tmp9Result8.useAnimatedReaction;
  items8[2] = backdropOpacity(dismissAccessibilityLabel[20]).scheduleOnRN;
  items8[3] = onLeave;
  c0 = undefined;
  let c1;
  let c2;
  [tmp23, tmp24, tmp25, tmp26] = items8;
  class BottomSheetNativeTsx3 {
    constructor(arg0) {
      const tmp = arg0 && "exiting" === c0;
      if (tmp) {
        _undefined(c2);
      }
    }
  }
  const items9 = [tmp24, tmp25, tmp26];
  BottomSheetNativeTsx3.__closure = items9;
  BottomSheetNativeTsx3.__workletHash = 15635557182085;
  BottomSheetNativeTsx3.__initData = tmp23;
  const animatedReaction = useAnimatedReaction(BottomSheetNativeTsx2, BottomSheetNativeTsx3);
  const items10 = [dismissAccessibilityLabel];
  const items11 = [backdropOpacity, backdropChildren];
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
    return authStore4(ActionSheetHeaderBar.ActionSheetHeaderBar, obj);
  }, items10);
  const items12 = [footer];
  const callback3 = obj.useCallback((animatedIndex) => {
    let items;
    let items1;
    const obj = { style: items, children: items1 };
    items = [hasOwnProperty.absoluteFill, animatedIndex.style];
    items1 = [, ];
    const obj2 = { animatedIndex: animatedIndex.animatedIndex, opacity: backdropOpacity };
    items1[0] = authStore4(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, obj2);
    items1[1] = backdropChildren;
    return closure_17(metroRequire, obj);
  }, items11);
  const callback4 = obj.useCallback((arg0) => {
    let tmpResult;
    const obj = { children: tmpResult };
    const BottomSheetFooter = BottomSheetModal.BottomSheetFooter;
    const merged = Object.assign(arg0);
    tmpResult = footer;
    if (footer == null) {
      tmpResult = tmp(NavScrim.NavScrim, {});
    }
    return authStore4(BottomSheetFooter, obj);
  }, items12);
  const tmp31 = tmp2(dismissAccessibilityLabel[14])({ ignoreKeyboard: true });
  const width = tmp31.width;
  const rect2 = tmp2(tmp3[8])();
  const left = rect2.left;
  const right = rect2.right;
  const result = Math.max(width - close, 0) / 2;
  c2 = result;
  const items13 = [result, left, right];
  const memo = obj.useMemo(() => {
    const obj = { marginLeft: Math.max(c2, left), marginRight: Math.max(c2, right) };
    return obj;
  }, items13);
  const tmp34 = flag ? ScrollableBottomSheetInner : ContentSizeBottomSheetInner;
  const tmp35 = tmp2(dismissAccessibilityLabel[24])();
  const items14 = [borderGradient];
  let callback5 = obj.useCallback((arg0) => {
    let tmp2 = null;
    if (null != borderGradient) {
      const obj = { borderGradient: tmp };
      const merged = Object.assign(arg0);
      tmp2 = authStore4(BorderGradientBackground, obj);
    }
    return tmp2;
  }, items14);
  let backgroundComponent = merged.backgroundComponent;
  if (backgroundComponent == null) {
    if (null == borderGradient) {
      callback5 = showGradient ? GradientBackground : Background;
    }
    backgroundComponent = callback5;
  }
  let obj2 = { ref: ref1, accessible: false, accessibilityRole: "none", accessibilityLabel: "", startHeight, contentHeight, maxHeight, containerHeight, startExpanded, hasEverExpanded: first, windowDimensions: tmp31, wrapperStyle: items15, onExpand: callback1, enablePanDownToClose: true, containerStyle: memo, backgroundStyle: items16, topInset: top, keyboardBehavior: str, keyboardBlurBehavior: "restore", keyboardShouldPersistTaps, animationConfigs: tmp10, overrideReduceMotion: tmp9(tmp3[15]).ReduceMotion.Never, handleIndicatorStyle: tmp5.handleIndicator, handleComponent: tmp38, backdropComponent: callback3, backgroundComponent, renderFooter: callback4, animatedIndex, onAnimate: callback, onClose: onLeave, extraContent, children: closure_16(LayerScope, obj5) };
  items15 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
  items16 = [tmp5.background, backgroundStyles];
  str = "interactive";
  if (flag) {
    str = "extend";
  }
  tmp38 = null;
  if (!handleDisabled) {
    if (handleComponent == null) {
      handleComponent = callback2;
    }
    tmp38 = handleComponent;
  }
  const obj3 = { style: items17, children: items18 };
  items17 = [tmp5.content, contentStyles];
  let tmp37Result = null != header;
  LayerScope = tmp9(tmp3[25]).LayerScope;
  const tmp39 = closure_17;
  if (tmp37Result) {
    const obj4 = { style: tmp5.header, children: header };
    tmp37Result = tmp37(tmp40, obj4);
  }
  items18 = [tmp37Result, ];
  const obj6 = { style: items19, children };
  items19 = [tmp5.body, bodyStyles];
  obj5 = { children: tmp39(borderGradient, obj3) };
  items18[1] = closure_16(borderGradient, obj6);
  const tmp37Result3 = closure_16(tmp34, obj2);
  let tmp37Result4 = tmp37Result3;
  if (showGradient) {
    let tmp44 = tmp35;
    const ThemeContextProvider = tmp9(tmp3[26]).ThemeContextProvider;
    if (tmp35 == null) {
      tmp44 = null;
    }
    const obj7 = { gradient: tmp44, children: tmp37Result3 };
    tmp37Result4 = tmp37(ThemeContextProvider, obj7);
  }
  return tmp37Result4;
}
