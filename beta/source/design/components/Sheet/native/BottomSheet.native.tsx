// Module ID: 6571
// Function ID: 6572
// Name: Sheet/BottomSheet
// Dependencies: [32, 19, 17, 6572, 21, 4836, 576, 1364, 1613, 5266, 6045, 5994, 5293, 1094, 4566, 6573, 4550, 6574, 5298, 6575, 6576, 6461, 1479, 4688, 6577, 4540, 2]

// Module 6571 (Sheet/BottomSheet)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 6575 */;
import Sheet_BottomSheetBackdrop from "Sheet/BottomSheetBackdrop" /* 6576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
let tmp5;
let unpackModuleId;
const ConstantsIOS = tmp5(1094);
const NavigatorConstants = tmp5(5994);
const BottomSheetModalDefault = tmp2(6045);
const NavScrim = tmp2(6461);
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
({ StyleSheet: hasOwnProperty, View: metroRequire, Platform } = react_native);
({ ACTION_SHEET_START_HEIGHT_RATIO: metroImportDefault, ACTION_SHEET_MAX_WIDTH: metroImportAll, ACTION_SHEET_SPRING_CONFIG: c9, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: c10, ACTION_SHEET_GRADIENT_BORDER_WIDTH: unpackModuleId, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_12, ACTION_SHEET_BORDER_RADIUS: map1, ACTION_SHEET_INNER_BORDER_RADIUS: closure_14, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_15 } = ActionSheetConstants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles((arg0) => {
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
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  return obj;
});
let closure_19 = react.forwardRef((windowDimensions, ref) => {
  let BottomSheetScrollView;
  let children;
  let closure_4;
  let first;
  let hasEverExpanded;
  let keyboardShouldPersistTaps;
  let obj4;
  let obj5;
  let scrollViewStyle;
  let startExpanded;
  let startHeight;
  let wrapperStyle;
  ({ startHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, scrollViewStyle: 0, startExpanded: 0, onChange: 0, onExpand: 0, keyboardShouldPersistTaps: 0, children: 0, maxDynamicContentSize: 0 }));
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
    const obj3 = { enableDynamicSizing: true, snapPoints: first, maxDynamicContentSize, ref, onChange: callback1, children: authStore3(BottomSheetScrollView, obj4) };
    const tmp2Result = BottomSheetModalDefault;
    const merged1 = Object.assign(merged);
    if (maxDynamicContentSize == null) {
      maxDynamicContentSize = height - tmp4(5994).NAV_BAR_HEIGHT_MULTILINE - top;
    }
    obj4 = { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle, children: authStore3(metroRequire, obj5) };
    obj5 = { onLayout: callback, style: wrapperStyle, children };
    BottomSheetScrollView = tmp4(6045).BottomSheetScrollView;
    return authStore3(tmp2Result, obj3);
  }
  items = [];
});
let closure_20 = react.forwardRef((windowDimensions, ref) => {
  let children;
  let contentHeight;
  let extraContent;
  let hasEverExpanded;
  let items2;
  let items3;
  let maxHeight;
  let startHeight;
  let wrapperStyle;
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  const borderGradient = windowDimensions.borderGradient;
  ({ wrapperStyle, children, extraContent } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, contentHeight: 0, maxHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, onChange: 0, onExpand: 0, children: 0, borderGradient: 0, extraContent: 0 }));
  startHeight = undefined;
  maxHeight = undefined;
  let c6;
  const tmp5 = require;
  const tmp2 = closure_18(false);
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
  const tmp11 = authStore3(metroRequire, obj2);
  const obj3 = { ref, enableDynamicSizing: false, contentHeight, snapPoints: memo, onChange: callback, children: items3 };
  const tmp3Result = BottomSheetModalDefault;
  const merged1 = Object.assign(merged);
  let tmp10Result = tmp11;
  const tmp10 = authStore3;
  const tmp12 = closure_17;
  if (null != borderGradient) {
    const obj4 = { style: tmp2.gradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: borderGradient, children: tmp11 };
    const tmp3Result2 = LinearGradientDefault;
    tmp10Result = tmp10(tmp3Result2, obj4);
  }
  items3 = [tmp10Result, extraContent];
  return tmp12(tmp3Result, obj3);
});
const __initData = { code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
const __initData2 = { code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
const __initData3 = { code: "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}" };
const forwardRefResult = react.forwardRef((scrollable, ref) => {
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
  let items12;
  let items8;
  let items9;
  let keyboardShouldPersistTaps;
  let maxHeight;
  let obj6;
  let showGradient;
  let startExpanded;
  let startHeight;
  let str;
  let tmp28;
  let tmp9Result10;
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
  ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight } = scrollable);
  let merged = Object.assign(scrollable, Object.assign({ scrollable: 0, startHeight: 0, maxHeight: 0, containerHeight: 0, startExpanded: 0, backdropOpacity: 0, backdropChildren: 0, header: 0, handleComponent: 0, handleDisabled: 0, dismissAccessibilityLabel: 0, footer: 0, onExpand: 0, onDismiss: 0, keyboardShouldPersistTaps: 0, children: 0, backgroundStyles: 0, contentStyles: 0, bodyStyles: 0, borderGradient: 0, showGradient: 0, extraContent: 0, contentHeight: 0 }));
  let derivedValue;
  let obj = onExpand;
  let tmp2 = backdropChildren;
  const context = onExpand.useContext(backdropChildren(dismissAccessibilityLabel[15]));
  const transitionState = context.transitionState;
  const close = context.close;
  const onLeave = context.onLeave;
  const registerDismissHandler = context.registerDismissHandler;
  const rect = backdropChildren(dismissAccessibilityLabel[8])();
  const top = rect.top;
  const tmp5 = closure_18(handleDisabled, Math.max(rect.bottom, derivedValue), flag);
  onExpand.useRef(null);
  const tmp7 = footer(onExpand.useState(startExpanded), 2);
  let closure_11 = tmp7[1];
  const first = tmp7[0];
  closure_12 = onExpand.useRef(false);
  ref = onExpand.useRef(true);
  let items = [onDismiss, registerDismissHandler];
  const tmp10 = onExpand.useContext(backdropOpacity(dismissAccessibilityLabel[16]).AccessibilityPreferencesContext).reducedMotion.enabled ? ref : registerDismissHandler;
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  const tmp9Result = backdropOpacity(dismissAccessibilityLabel[17]);
  const bottomSheetImperativeHandle = tmp9Result.useBottomSheetImperativeHandle(ref, ref);
  let items1 = [transitionState, close];
  const effect = obj.useEffect(() => {
    let current = "exiting" !== transitionState;
    const tmp = transitionState;
    if (!current) {
      current = closure_12.current;
    }
    if (!current) {
      closure_13.current = false;
      const current2 = ref.current;
      if (current2 != null) {
        current2.forceClose();
      }
    }
    const current3 = "visible" === tmp && closure_12.current;
    if (current3) {
      close();
    }
  }, items1);
  const tmp9Result6 = backdropOpacity(dismissAccessibilityLabel[18]);
  const unmountEffect = tmp9Result6.useUnmountEffect(() => {
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
        const current2 = ref.current;
        if (current2 != null) {
          current2.forceClose();
        }
      }
    }
  }, items2);
  let animatedIndex = merged.animatedIndex;
  const callback1 = obj.useCallback(() => {
    closure_11(true);
    if (onExpand != null) {
      onExpand();
    }
  }, items3);
  const tmp9Result7 = backdropOpacity(dismissAccessibilityLabel[14]);
  if (animatedIndex == null) {
    animatedIndex = tmp9Result7.useSharedValue(-1);
  }
  function ue() {
    return animatedIndex.get() <= -1;
  }
  ue.__closure = { animatedIndex };
  ue.__workletHash = 4341912681188;
  ue.__initData = __initData;
  const tmp9Result8 = backdropOpacity(dismissAccessibilityLabel[14]);
  derivedValue = tmp9Result8.useDerivedValue(ue);
  function _e() {
    return derivedValue.get();
  }
  _e.__closure = { animatedIsVisuallyClosed: derivedValue };
  _e.__workletHash = 6995719052506;
  _e.__initData = __initData2;
  function he(arg0) {
    const tmp = arg0 && "exiting" === transitionState;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(onLeave)();
    }
  }
  const tmp9Result9 = backdropOpacity(dismissAccessibilityLabel[14]);
  let obj2 = { transitionState, runOnJS: tmp9(tmp3[14]).runOnJS, onLeave };
  he.__closure = obj2;
  he.__workletHash = 77590951197;
  he.__initData = __initData3;
  const animatedReaction = tmp9Result9.useAnimatedReaction(_e, he);
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
    return authStore3(ActionSheetHeaderBar.ActionSheetHeaderBar, obj);
  }, items4);
  const items6 = [footer];
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
    return authStore3(BottomSheetFooter, obj);
  }, items6);
  const tmp22 = tmp2(dismissAccessibilityLabel[22])({ ignoreKeyboard: true });
  const width = tmp22.width;
  const items7 = [width];
  const memo = obj.useMemo(() => {
    const obj = { marginHorizontal: Math.max(width - onLeave, 0) / 2 };
    return obj;
  }, items7);
  const tmp24 = flag ? closure_20 : closure_19;
  const tmp25 = tmp2(dismissAccessibilityLabel[23])();
  let backgroundComponent = merged.backgroundComponent;
  if (backgroundComponent == null) {
    backgroundComponent = showGradient ? GradientBackground : Background;
  }
  const obj3 = { ref, accessible: !tmp9Result10.isIOS() && undefined, accessibilityRole: "none", accessibilityLabel: "", startHeight, contentHeight, maxHeight, containerHeight, startExpanded, hasEverExpanded: first, windowDimensions: tmp22, wrapperStyle: items8, onExpand: callback1, enablePanDownToClose: true, containerStyle: memo, backgroundStyle: items9, topInset: top, keyboardBehavior: str, keyboardBlurBehavior: "restore", keyboardShouldPersistTaps, animationConfigs: tmp10, overrideReduceMotion: backdropOpacity(dismissAccessibilityLabel[14]).ReduceMotion.Never, handleIndicatorStyle: tmp5.handleIndicator, handleComponent: tmp28, backdropComponent: callback3, backgroundComponent, renderFooter: callback4, animatedIndex, onAnimate: callback, onClose: onLeave, borderGradient, extraContent, children: closure_16(LayerScope, obj6) };
  tmp9Result10 = backdropOpacity(dismissAccessibilityLabel[7]);
  items8 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
  items9 = [tmp5.background, backgroundStyles];
  str = "interactive";
  tmp9Result10.isIOS();
  if (flag) {
    str = "extend";
  }
  tmp28 = null;
  if (!handleDisabled) {
    if (handleComponent == null) {
      handleComponent = callback2;
    }
    tmp28 = handleComponent;
  }
  const obj4 = { style: items10, children: items11 };
  items10 = [tmp5.content, contentStyles];
  let tmp26Result = null != header;
  LayerScope = tmp9(tmp3[24]).LayerScope;
  const tmp29 = closure_17;
  if (tmp26Result) {
    const obj5 = { style: tmp5.header, children: header };
    tmp26Result = tmp26(tmp30, obj5);
  }
  items11 = [tmp26Result, ];
  const obj7 = { style: items12, children };
  items12 = [tmp5.body, bodyStyles];
  obj6 = { children: tmp29(transitionState, obj4) };
  items11[1] = closure_16(transitionState, obj7);
  const tmp26Result3 = closure_16(tmp24, obj3);
  let tmp26Result4 = tmp26Result3;
  if (showGradient) {
    let tmp34 = tmp25;
    const ThemeContextProvider = tmp9(tmp3[25]).ThemeContextProvider;
    if (tmp25 == null) {
      tmp34 = null;
    }
    const obj8 = { gradient: tmp34, children: tmp26Result3 };
    tmp26Result4 = tmp26(ThemeContextProvider, obj8);
  }
  return tmp26Result4;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export const BottomSheet = forwardRefResult;
