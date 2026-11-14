// Module ID: 5566
// Function ID: 5567
// Name: Sheet/BottomSheet
// Dependencies: [32, 19, 17, 5567, 21, 5306, 575, 1380, 1630, 5568, 5569, 5570, 5892, 5893, 1092, 1496, 1655, 5897, 5320, 5898, 5899, 1708, 5901, 5903, 5912, 5488, 5915, 5916, 5377, 2]
// Exports: BottomSheet, useBottomSheetContainerStyle, useBottomSheetWidth

// Module 5566 (Sheet/BottomSheet)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5568 */;
import BottomSheetSnapPoints from "BottomSheetSnapPoints" /* 5569 */;
import BottomSheetModal from "BottomSheetModal" /* 5570 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5901 */;
import Sheet_BottomSheetBackdrop from "Sheet/BottomSheetBackdrop" /* 5903 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5567 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
const BottomSheetModalDefault = tmp2(5570);
const NavigatorConstants = tmp4(5892);
const NavScrim = tmp2(5912);
function Background(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return authStore3(metroRequire, obj);
}
function GradientBackground(arg0) {
  let obj2;
  const obj = { children: authStore3(metroRequire, obj2) };
  const tmp = closure_18(false);
  const merged = Object.assign(arg0);
  obj2 = { style: tmp.backgroundOverlay };
  return authStore3(metroRequire, obj);
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
  items = [authStore3(tmp4, obj2), ];
  const obj3 = { style: items1 };
  items1 = [tmp2.gradientInnerFill, { backgroundColor }];
  items[1] = authStore3(metroRequire, obj3);
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
  let _undefined;
  let c7;
  let children;
  let followWindowHeight;
  let hasEverExpanded;
  let keyboardShouldPersistTaps;
  let maxDynamicContentSize;
  let obj5;
  let ref;
  let scrollViewStyle;
  let startExpanded;
  let startHeight;
  let tmp13;
  let wrapperStyle;
  ({ startHeight, hasEverExpanded } = windowDimensions);
  let height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  ({ maxDynamicContentSize, followWindowHeight } = windowDimensions);
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children, ref } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, scrollViewStyle: 0, startExpanded: 0, onChange: 0, onExpand: 0, keyboardShouldPersistTaps: 0, children: 0, maxDynamicContentSize: 0, followWindowHeight: 0, ref: 0 }));
  startHeight = undefined;
  let first1;
  let closure_6;
  c7 = undefined;
  let droppedStartHeight;
  let tmp2 = onExpand;
  let tmp4 = onChange;
  const top = onExpand(followWindowHeight[8])().top;
  let obj = onChange(followWindowHeight[9]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * c7;
  }
  let obj2 = startHeight;
  startHeight = isScreenReaderEnabled(startHeight.useState(startHeight), 1)[0];
  let tmp9 = isScreenReaderEnabled;
  const useState = obj2.useState;
  if (!isScreenReaderEnabled) {
    tmp9 = true === startExpanded;
  }
  const tmp7Result = isScreenReaderEnabled(useState(tmp9), 2);
  first1 = tmp7Result[0];
  closure_6 = tmp7Result[1];
  [tmp13, c7] = isScreenReaderEnabled(obj2.useState({ contentHeight: null, droppedStartHeight: null }), 2);
  const items = [isScreenReaderEnabled];
  isScreenReaderEnabled(obj2.useState({ contentHeight: null, droppedStartHeight: null }), 2);
  const effect = obj2.useEffect(() => {
    const tmp = isScreenReaderEnabled;
    if (tmp) {
      closure_6(true);
    }
  }, items);
  let obj3 = { startHeight };
  const resolveDroppedStartHeight = tmp4(tmp3[10]).resolveDroppedStartHeight;
  tmp4(followWindowHeight[10]);
  const merged1 = Object.assign(tmp13);
  droppedStartHeight = resolveDroppedStartHeight(obj3);
  const items1 = [startHeight, droppedStartHeight, first1];
  const items2 = [followWindowHeight, startHeight];
  const memo = obj2.useMemo(() => {
    const obj = BottomSheetSnapPoints;
    const obj2 = { startHeight, droppedStartHeight, forceFullHeight: first1 };
    return obj.getContentSizeSnapPoints(obj2);
  }, items1);
  const items3 = [onChange, onExpand];
  const callback = obj2.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let tmp = _undefined((droppedStartHeight) => {
      let tmp = droppedStartHeight;
      const obj = BottomSheetSnapPoints;
      const obj2 = { droppedStartHeight: droppedStartHeight.droppedStartHeight, contentHeight: height, startHeight };
      droppedStartHeight = obj.resolveDroppedStartHeight(obj2);
      let tmp4 = null;
      const tmp2 = height;
      if (followWindowHeight) {
        tmp4 = tmp2;
      }
      if (tmp.contentHeight !== tmp4) {
        tmp = { contentHeight: tmp4, droppedStartHeight };
        const obj3 = { contentHeight: tmp4, droppedStartHeight };
      }
      return tmp;
    });
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
  const obj4 = { enableDynamicSizing: true, snapPoints: memo, maxDynamicContentSize, ref, onChange: callback1, children: closure_16(BottomSheetScrollView, obj5) };
  const tmp2Result = tmp2(followWindowHeight[11]);
  const merged2 = Object.assign(merged);
  if (maxDynamicContentSize == null) {
    maxDynamicContentSize = height - tmp4(tmp3[12]).NAV_BAR_HEIGHT_MULTILINE - top;
  }
  obj5 = { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle, children: closure_16(closure_6, { onLayout: callback, style: wrapperStyle, children }) };
  BottomSheetScrollView = tmp4(tmp3[11]).BottomSheetScrollView;
  return closure_16(tmp2Result, obj4);
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
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, contentHeight: 0, maxHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, onChange: 0, onExpand: 0, children: 0, extraContent: 0, followWindowHeight: 0, ref: 0 }));
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
  const tmp9 = authStore3(metroRequire, obj2);
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
  let items20;
  let keyboardShouldPersistTaps;
  let maxHeight;
  let resyncOnRotation;
  let showGradient;
  let startExpanded;
  let startHeight;
  let str;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp39;
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
  ({ showGradient, resyncOnRotation, keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight } = scrollable);
  if (resyncOnRotation === undefined) {
    resyncOnRotation = false;
  }
  let merged = Object.assign(scrollable, Object.assign({ scrollable: 0, startHeight: 0, maxHeight: 0, containerHeight: 0, startExpanded: 0, backdropOpacity: 0, backdropChildren: 0, header: 0, handleComponent: 0, handleDisabled: 0, dismissAccessibilityLabel: 0, footer: 0, onExpand: 0, onDismiss: 0, keyboardShouldPersistTaps: 0, children: 0, backgroundStyles: 0, contentStyles: 0, bodyStyles: 0, borderGradient: 0, showGradient: 0, extraContent: 0, contentHeight: 0, resyncOnRotation: 0, ref: 0 }));
  let obj = onExpand;
  let tmp2 = backdropChildren;
  const context = onExpand.useContext(backdropChildren(dismissAccessibilityLabel[17]));
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
  const ref2 = onExpand.useRef(false);
  const ref = onExpand.useRef(true);
  let items = [onDismiss, registerDismissHandler];
  const tmp11 = onExpand.useContext(backdropOpacity(dismissAccessibilityLabel[18]).AccessibilityPreferencesContext).reducedMotion.enabled ? registerDismissHandler : onLeave;
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  const tmp10Result = backdropOpacity(dismissAccessibilityLabel[19]);
  const bottomSheetImperativeHandle = tmp10Result.useBottomSheetImperativeHandle(ref, ref1);
  let items1 = [transitionState, close];
  const effect = obj.useEffect(() => {
    let current = "exiting" !== transitionState;
    const tmp = transitionState;
    if (!current) {
      current = ref2.current;
    }
    if (!current) {
      ref.current = false;
      const current2 = ref1.current;
      if (current2 != null) {
        current2.forceClose();
      }
    }
    const current3 = "visible" === tmp && ref2.current;
    if (current3) {
      close();
    }
  }, items1);
  const tmp10Result6 = backdropOpacity(dismissAccessibilityLabel[20]);
  const unmountEffect = tmp10Result6.useUnmountEffect(() => {
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
        if (!ref2.current) {
          tmp2.current = true;
          close();
        }
      }
      const current = arg1 > -1 && ref2.current;
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
  const tmp10Result7 = backdropOpacity(dismissAccessibilityLabel[16]);
  if (animatedIndex == null) {
    animatedIndex = tmp10Result7.useSharedValue(-1);
  }
  const items4 = [closure_24, animatedIndex];
  let c0;
  [tmp18, tmp19] = items4;
  const tmp10Result8 = backdropOpacity(dismissAccessibilityLabel[16]);
  class BottomSheetNativeTsx1 {
    constructor() {
      return _undefined.get() <= -1;
    }
  }
  const items5 = [tmp19];
  BottomSheetNativeTsx1.__closure = items5;
  BottomSheetNativeTsx1.__workletHash = 4031587621117;
  BottomSheetNativeTsx1.__initData = tmp18;
  const derivedValue = tmp10Result8.useDerivedValue(BottomSheetNativeTsx1);
  const items6 = [closure_25, derivedValue];
  c0 = undefined;
  [tmp22, tmp23] = items6;
  const tmp10Result9 = backdropOpacity(dismissAccessibilityLabel[16]);
  class BottomSheetNativeTsx2 {
    constructor() {
      return _undefined.get();
    }
  }
  const items7 = [tmp23];
  BottomSheetNativeTsx2.__closure = items7;
  BottomSheetNativeTsx2.__workletHash = 8974006408707;
  BottomSheetNativeTsx2.__initData = tmp22;
  const items8 = [closure_26, transitionState, , ];
  const useAnimatedReaction = tmp10Result9.useAnimatedReaction;
  items8[2] = backdropOpacity(dismissAccessibilityLabel[21]).scheduleOnRN;
  items8[3] = onLeave;
  c0 = undefined;
  let c1;
  let c2;
  [tmp24, tmp25, tmp26, tmp27] = items8;
  class BottomSheetNativeTsx3 {
    constructor(arg0) {
      const tmp = arg0 && "exiting" === c0;
      if (tmp) {
        _undefined(c2);
      }
    }
  }
  const items9 = [tmp25, tmp26, tmp27];
  BottomSheetNativeTsx3.__closure = items9;
  BottomSheetNativeTsx3.__workletHash = 15635557182085;
  BottomSheetNativeTsx3.__initData = tmp24;
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
    return authStore3(ActionSheetHeaderBar.ActionSheetHeaderBar, obj);
  }, items10);
  const items12 = [footer];
  const callback3 = obj.useCallback((animatedIndex) => {
    let items;
    let items1;
    const obj = { style: items, children: items1 };
    items = [hasOwnProperty.absoluteFill, animatedIndex.style];
    items1 = [, ];
    const obj2 = { animatedIndex: animatedIndex.animatedIndex, opacity: backdropOpacity };
    items1[0] = authStore3(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, obj2);
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
    return authStore3(BottomSheetFooter, obj);
  }, items12);
  const tmp32 = tmp2(dismissAccessibilityLabel[15])({ ignoreKeyboard: true });
  const width = tmp32.width;
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
  const tmp35 = flag ? ScrollableBottomSheetInner : ContentSizeBottomSheetInner;
  if (resyncOnRotation) {
    const tmp10Result10 = backdropOpacity(dismissAccessibilityLabel[7]);
    resyncOnRotation = tmp10Result10.isAndroid();
  }
  const tmp36 = tmp2(dismissAccessibilityLabel[25])();
  const items14 = [borderGradient];
  let callback5 = obj.useCallback((arg0) => {
    let tmp2 = null;
    if (null != borderGradient) {
      const obj = { borderGradient: tmp };
      const merged = Object.assign(arg0);
      tmp2 = authStore3(BorderGradientBackground, obj);
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
  let obj2 = { ref: ref1, accessible: false, accessibilityRole: "none", accessibilityLabel: "", startHeight, contentHeight, maxHeight, containerHeight, startExpanded, hasEverExpanded: first, windowDimensions: tmp32, followWindowHeight: resyncOnRotation, wrapperStyle: items15, onExpand: callback1, enablePanDownToClose: true, containerStyle: memo, backgroundStyle: items16, topInset: top, keyboardBehavior: str, keyboardBlurBehavior: "restore", keyboardShouldPersistTaps, animationConfigs: tmp11, overrideReduceMotion: backdropOpacity(tmp3[16]).ReduceMotion.Never, handleIndicatorStyle: tmp5.handleIndicator, handleComponent: tmp39, backdropComponent: callback3, backgroundComponent, renderFooter: callback4, animatedIndex, onAnimate: callback, onClose: onLeave, extraContent, children: items17 };
  items15 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
  items16 = [tmp5.background, backgroundStyles];
  str = "interactive";
  if (flag) {
    str = "extend";
  }
  tmp39 = null;
  if (!handleDisabled) {
    if (handleComponent == null) {
      handleComponent = callback2;
    }
    tmp39 = handleComponent;
  }
  if (resyncOnRotation) {
    const obj3 = { bottomSheetRef: ref1, isExitingRef: ref2 };
    resyncOnRotation = closure_16(tmp10(tmp3[26]).BottomSheetRotationResync, obj3);
  }
  items17 = [resyncOnRotation, ];
  const obj4 = { style: items18, children: items19 };
  items18 = [tmp5.content, contentStyles];
  let tmp41Result = null != header;
  const LayerScope = tmp10(tmp3[27]).LayerScope;
  if (tmp41Result) {
    const obj5 = { style: tmp5.header, children: header };
    tmp41Result = tmp41(tmp42, obj5);
  }
  items19 = [tmp41Result, ];
  const obj7 = { style: items20, children };
  items20 = [tmp5.body, bodyStyles];
  const obj6 = { children: closure_17(borderGradient, obj4) };
  items19[1] = closure_16(borderGradient, obj7);
  items17[1] = closure_16(LayerScope, obj6);
  const tmp38Result = closure_17(tmp35, obj2);
  let tmp41Result2 = tmp38Result;
  if (showGradient) {
    let tmp46 = tmp36;
    const ThemeContextProvider = tmp10(tmp3[28]).ThemeContextProvider;
    if (tmp36 == null) {
      tmp46 = null;
    }
    const obj8 = { gradient: tmp46, children: tmp38Result };
    tmp41Result2 = tmp41(ThemeContextProvider, obj8);
  }
  return tmp41Result2;
}
