// Module ID: 5187
// Function ID: 45040
// Name: Background
// Dependencies: [57, 31, 27, 5188, 33, 4130, 689, 3994, 1557, 4528, 5084, 5189, 4554, 668, 3991, 5444, 3849, 5445, 4559, 5446, 5447, 5448, 1450, 3977, 477, 5449, 3842, 2]

// Module 5187 (Background)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "set";
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function Background(arg0) {
  const merged = Object.assign(arg0);
  return callback(closure_6, {});
}
function GradientBackground(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { style: callback2(false).backgroundOverlay };
  obj["children"] = callback(closure_6, obj);
  return callback(closure_6, obj);
}
({ StyleSheet: closure_5, View: closure_6, Platform } = get_ActivityIndicator);
({ ACTION_SHEET_START_HEIGHT_RATIO: closure_7, ACTION_SHEET_MAX_WIDTH: closure_8, ACTION_SHEET_SPRING_CONFIG: closure_9, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: closure_10, ACTION_SHEET_GRADIENT_BORDER_WIDTH: closure_11, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_12, ACTION_SHEET_BORDER_RADIUS: closure_13, ACTION_SHEET_INNER_BORDER_RADIUS: closure_14, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_15 } = ACTION_SHEET_START_HEIGHT_RATIO);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let num = arg1;
  let flag = arg2;
  if (arg1 === undefined) {
    num = 0;
  }
  if (flag === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { overflow: "hidden", borderTopLeftRadius: closure_13, borderTopRightRadius: closure_13, backgroundColor: importDefault(689).colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.background = obj;
  obj.wrapper = { overflow: "hidden", flex: 1 };
  obj = { overflow: "hidden", marginTop: closure_11, marginHorizontal: closure_11, borderTopLeftRadius: closure_12, borderTopRightRadius: closure_12, backgroundColor: importDefault(689).colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.wrapperWithBorder = obj;
  const obj1 = {};
  let tmp;
  if (arg0) {
    tmp = closure_13;
  }
  obj1.borderTopLeftRadius = tmp;
  let tmp2;
  if (arg0) {
    tmp2 = closure_13;
  }
  obj1.borderTopRightRadius = tmp2;
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj1.overflow = str;
  let num2 = 0;
  if (!flag) {
    num2 = num + 4;
  }
  obj1.marginBottom = num2;
  obj1.flex = 1;
  obj.content = obj1;
  const obj2 = { height: "100%" };
  let str2;
  if (obj6.isIosFabric()) {
    str2 = "hidden";
  }
  obj2.overflow = str2;
  obj2.borderTopLeftRadius = closure_14;
  obj2.borderTopRightRadius = closure_14;
  obj.gradient = obj2;
  obj6 = require(3994) /* isFabric */;
  obj.handleIndicator = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG };
  const obj4 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj4["backgroundColor"] = importDefault(689).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
  obj.backgroundOverlay = obj4;
  obj.header = { marginBottom: 16 };
  obj.body = { flex: 1 };
  return obj;
});
let closure_19 = importAllResult.forwardRef((windowDimensions) => {
  let children;
  let hasEverExpanded;
  let keyboardShouldPersistTaps;
  let scrollViewStyle;
  let startExpanded;
  let startHeight;
  let wrapperStyle;
  ({ startHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
  let obj = { startHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, scrollViewStyle: 0, startExpanded: 0, onChange: 0, onExpand: 0, keyboardShouldPersistTaps: 0, children: 0, maxDynamicContentSize: 0 };
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children } = windowDimensions);
  Object.setPrototypeOf(null);
  const merged = Object.assign(windowDimensions, obj);
  startHeight = undefined;
  let importAllResult;
  let obj1 = onChange(isScreenReaderEnabled[9]);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  if (null == startHeight) {
    startHeight = height * closure_7;
  }
  if (null == maxDynamicContentSize) {
    maxDynamicContentSize = height - onChange(isScreenReaderEnabled[10]).NAV_BAR_HEIGHT_MULTILINE - onExpand(isScreenReaderEnabled[8])().top;
  }
  if (!isScreenReaderEnabled) {
    if (!startExpanded) {
      let items = [startHeight];
    }
    const tmp10 = startHeight(tmp8(items), 2);
    importAllResult = tmp10[1];
    const items1 = [isScreenReaderEnabled];
    const effect = importAllResult.useEffect(() => {
      if (isScreenReaderEnabled) {
        callback([]);
      }
    }, items1);
    const items2 = [startHeight];
    const items3 = [onChange, onExpand];
    const callback = importAllResult.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.layout.height < startHeight) {
        callback([]);
      }
    }, items2);
    const callback1 = importAllResult.useCallback((arg0, arg1, arg2) => {
      if (null != onChange) {
        onChange(arg0, arg1, arg2);
      }
      if (0 === arg0) {
        if (null != onExpand) {
          onExpand();
        }
      }
    }, items3);
    obj = {};
    const merged1 = Object.assign(merged);
    obj["enableDynamicSizing"] = true;
    obj["snapPoints"] = tmp10[0];
    obj["maxDynamicContentSize"] = maxDynamicContentSize;
    obj["ref"] = arg1;
    obj["onChange"] = callback1;
    obj = { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle };
    obj1 = { onLayout: callback, style: wrapperStyle, children };
    obj.children = callback(closure_6, obj1);
    obj["children"] = callback(onChange(isScreenReaderEnabled[11]).BottomSheetScrollView, obj);
    return callback(onExpand(isScreenReaderEnabled[11]), obj);
  }
  items = [];
});
let closure_20 = importAllResult.forwardRef((windowDimensions) => {
  let children;
  let contentHeight;
  let extraContent;
  let hasEverExpanded;
  let maxHeight;
  let startHeight;
  let wrapperStyle;
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  const borderGradient = windowDimensions.borderGradient;
  let obj = { startHeight: 0, contentHeight: 0, maxHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, onChange: 0, onExpand: 0, children: 0, borderGradient: 0, extraContent: 0 };
  ({ wrapperStyle, children, extraContent } = windowDimensions);
  Object.setPrototypeOf(null);
  const merged = Object.assign(windowDimensions, obj);
  startHeight = undefined;
  let c5;
  let diff1;
  let obj1 = hasEverExpanded(onExpand[9]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  if (null == startHeight) {
    startHeight = height * closure_7;
  }
  let diff = contentHeight;
  if (null != maxHeight) {
    diff = maxHeight;
  }
  if (null == diff) {
    diff = height - hasEverExpanded(onExpand[10]).NAV_BAR_HEIGHT_MULTILINE - onChange(onExpand[8])().top;
  }
  c5 = diff;
  let items = [hasEverExpanded, isScreenReaderEnabled, diff, startHeight];
  const memo = startHeight.useMemo(() => {
    const items = [];
    let tmp = !isScreenReaderEnabled;
    if (tmp) {
      tmp = !hasEverExpanded;
    }
    if (tmp) {
      tmp = startHeight < c5;
    }
    if (tmp) {
      items.push(startHeight);
    }
    items.push(c5);
    return items;
  }, items);
  diff1 = memo.length - 1;
  const items1 = [onChange, onExpand, diff1];
  const items2 = [wrapperStyle, ];
  obj = { maxHeight: diff };
  items2[1] = obj;
  const callback = startHeight.useCallback((arg0, arg1, arg2) => {
    if (null != onChange) {
      onChange(arg0, arg1, arg2);
    }
    if (arg0 === diff1) {
      if (null != onExpand) {
        onExpand();
      }
    }
  }, items1);
  const tmp11 = callback(diff1, { style: items2, children });
  obj = {};
  const tmp12 = closure_17;
  const tmp3 = callback2(false);
  const merged1 = Object.assign(merged);
  obj["ref"] = arg1;
  obj["enableDynamicSizing"] = false;
  obj["contentHeight"] = contentHeight;
  obj["snapPoints"] = memo;
  obj["onChange"] = callback;
  let tmp15 = tmp11;
  if (null != borderGradient) {
    obj1 = { style: tmp3.gradient, start: hasEverExpanded(onExpand[13]).VerticalGradient.START, end: hasEverExpanded(onExpand[13]).VerticalGradient.END, colors: borderGradient, children: tmp11 };
    tmp15 = callback(onChange(onExpand[12]), obj1);
    const tmp19 = onChange(onExpand[12]);
  }
  const items3 = [tmp15, extraContent];
  obj["children"] = items3;
  return tmp12(onChange(onExpand[11]), obj);
});
let closure_21 = { code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
let closure_22 = { code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
let closure_23 = { code: "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}" };
const forwardRefResult = importAllResult.forwardRef((scrollable) => {
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
  let keyboardShouldPersistTaps;
  let maxHeight;
  let showGradient;
  let startExpanded;
  let startHeight;
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
  let obj = { scrollable: 0, startHeight: 0, maxHeight: 0, containerHeight: 0, startExpanded: 0, backdropOpacity: 0, backdropChildren: 0, header: 0, handleComponent: 0, handleDisabled: 0, dismissAccessibilityLabel: 0, footer: 0, onExpand: 0, onDismiss: 0, keyboardShouldPersistTaps: 0, children: 0, backgroundStyles: 0, contentStyles: 0, bodyStyles: 0, borderGradient: 0, showGradient: 0, extraContent: 0, contentHeight: 0 };
  ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight } = scrollable);
  Object.setPrototypeOf(null);
  let merged = Object.assign(scrollable, obj);
  let transitionState;
  let close;
  let onLeave;
  let registerDismissHandler;
  let ref;
  let closure_11;
  let closure_12;
  let closure_13;
  let sharedValue;
  let derivedValue;
  const context = onExpand.useContext(backdropChildren(dismissAccessibilityLabel[15]));
  transitionState = context.transitionState;
  close = context.close;
  onLeave = context.onLeave;
  registerDismissHandler = context.registerDismissHandler;
  const rect = backdropChildren(dismissAccessibilityLabel[8])();
  const tmp4 = callback2(handleDisabled, Math.max(rect.bottom, derivedValue), flag);
  ref = onExpand.useRef(null);
  let tmp6 = footer(onExpand.useState(startExpanded), 2);
  closure_11 = tmp6[1];
  closure_12 = onExpand.useRef(false);
  closure_13 = onExpand.useRef(true);
  let obj1 = onExpand;
  let items = [onDismiss, registerDismissHandler];
  const layoutEffect = onExpand.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  let obj2 = backdropOpacity(dismissAccessibilityLabel[17]);
  const bottomSheetImperativeHandle = obj2.useBottomSheetImperativeHandle(arg1, ref);
  let items1 = [transitionState, close];
  const effect = onExpand.useEffect(() => {
    let current = "exiting" !== transitionState;
    if (!current) {
      current = closure_12.current;
    }
    if (!current) {
      closure_13.current = false;
      const current2 = ref.current;
      if (null != current2) {
        current2.forceClose();
      }
    }
    let current3 = "visible" === transitionState;
    if (current3) {
      current3 = closure_12.current;
    }
    if (current3) {
      close();
    }
  }, items1);
  let obj3 = backdropOpacity(dismissAccessibilityLabel[18]);
  const unmountEffect = obj3.useUnmountEffect(() => {
    if (ref.current) {
      if (null != onDismiss) {
        onDismiss();
      }
    }
    onLeave();
  });
  const items2 = [close];
  const items3 = [onExpand];
  const callback = onExpand.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    if (arg4 !== backdropOpacity(dismissAccessibilityLabel[11]).ANIMATION_SOURCE.KEYBOARD) {
      if (-1 === arg1) {
        if (!closure_12.current) {
          closure_12.current = true;
          close();
        }
      }
      if (arg1 > -1) {
        if (closure_12.current) {
          const current = ref.current;
          if (null != current) {
            current.forceClose();
          }
        }
      }
    }
  }, items2);
  const animatedIndex = merged.animatedIndex;
  const callback1 = onExpand.useCallback(() => {
    callback(true);
    if (null != onExpand) {
      onExpand();
    }
  }, items3);
  let obj4 = backdropOpacity(dismissAccessibilityLabel[14]);
  sharedValue = obj4.useSharedValue(-1);
  if (null != animatedIndex) {
    sharedValue = animatedIndex;
  }
  let tmp9Result = tmp9(tmp10[14]);
  function he() {
    return sharedValue.get() <= -1;
  }
  obj = { animatedIndex: sharedValue };
  he.__closure = obj;
  he.__workletHash = 4341912681188;
  he.__initData = closure_21;
  derivedValue = tmp9Result.useDerivedValue(he);
  tmp9Result = tmp9(tmp10[14]);
  class Se {
    constructor() {
      return c15.get();
    }
  }
  Se.__closure = { animatedIsVisuallyClosed: derivedValue };
  Se.__workletHash = 6995719052506;
  Se.__initData = closure_22;
  function _e(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = "exiting" === transitionState;
    }
    if (tmp) {
      backdropOpacity(dismissAccessibilityLabel[14]).runOnJS(onLeave)();
      const obj = backdropOpacity(dismissAccessibilityLabel[14]);
    }
  }
  obj = { transitionState, runOnJS: tmp9(tmp10[14]).runOnJS, onLeave };
  _e.__closure = obj;
  _e.__workletHash = 77590951197;
  _e.__initData = closure_23;
  const animatedReaction = tmp9Result.useAnimatedReaction(Se, _e);
  const items4 = [dismissAccessibilityLabel];
  callback2 = obj1.useCallback(() => outer1_16(backdropOpacity(dismissAccessibilityLabel[19]).ActionSheetHeaderBar, {
    accessibilityLabel: dismissAccessibilityLabel,
    onPress() {
      const current = outer1_10.current;
      if (null != current) {
        current.close();
      }
    }
  }), items4);
  const items5 = [backdropOpacity, backdropChildren];
  const items6 = [footer];
  const callback3 = obj1.useCallback((animatedIndex) => {
    let obj = { style: items };
    items = [onDismiss.absoluteFill, animatedIndex.style];
    obj = { animatedIndex: animatedIndex.animatedIndex, opacity: backdropOpacity };
    const items1 = [outer1_16(backdropOpacity(dismissAccessibilityLabel[20]).BottomSheetBackdrop, obj), backdropChildren];
    obj.children = items1;
    return outer1_17(transitionState, obj);
  }, items5);
  const callback4 = obj1.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    if (null != footer) {
      let tmp6 = footer;
    } else {
      tmp6 = outer1_16(backdropOpacity(dismissAccessibilityLabel[21]).NavScrim, {});
    }
    obj["children"] = tmp6;
    return outer1_16(backdropOpacity(dismissAccessibilityLabel[11]).BottomSheetFooter, obj);
  }, items6);
  const tmp22 = backdropChildren(dismissAccessibilityLabel[22])({ ignoreKeyboard: true });
  const tmp7 = onExpand.useContext(backdropOpacity(dismissAccessibilityLabel[16]).AccessibilityPreferencesContext).reducedMotion.enabled ? ref : registerDismissHandler;
  const tmp25 = backdropChildren(dismissAccessibilityLabel[23])();
  const backgroundComponent = merged.backgroundComponent;
  if (null != backgroundComponent) {
    obj1 = { ref };
    const obj11 = backdropOpacity(dismissAccessibilityLabel[24]);
    const tmp27 = callback;
    obj1.accessible = !backdropOpacity(dismissAccessibilityLabel[24]).isIOS() && undefined;
    obj1.accessibilityRole = "none";
    obj1.accessibilityLabel = "";
    obj1.startHeight = startHeight;
    obj1.contentHeight = contentHeight;
    obj1.maxHeight = maxHeight;
    obj1.containerHeight = containerHeight;
    obj1.startExpanded = startExpanded;
    obj1.hasEverExpanded = tmp6[0];
    obj1.windowDimensions = tmp22;
    const items7 = [tmp4.wrapper, null != borderGradient && tmp4.wrapperWithBorder];
    obj1.wrapperStyle = items7;
    obj1.onExpand = callback1;
    obj1.enablePanDownToClose = true;
    obj1.containerStyle = tmp23;
    const items8 = [tmp4.background, backgroundStyles];
    obj1.backgroundStyle = items8;
    obj1.topInset = rect.top;
    let str3 = "interactive";
    if (flag) {
      str3 = "extend";
    }
    obj1.keyboardBehavior = str3;
    obj1.keyboardBlurBehavior = "restore";
    obj1.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
    obj1.animationConfigs = tmp7;
    obj1.overrideReduceMotion = backdropOpacity(dismissAccessibilityLabel[14]).ReduceMotion.Never;
    obj1.handleIndicatorStyle = tmp4.handleIndicator;
    let tmp33 = null;
    if (!handleDisabled) {
      if (null != handleComponent) {
        callback2 = handleComponent;
      }
      tmp33 = callback2;
    }
    obj1.handleComponent = tmp33;
    obj1.backdropComponent = callback3;
    obj1.backgroundComponent = backgroundComponent;
    obj1.renderFooter = callback4;
    obj1.animatedIndex = sharedValue;
    obj1.onAnimate = callback;
    obj1.onClose = onLeave;
    obj1.borderGradient = borderGradient;
    obj1.extraContent = extraContent;
    obj2 = {};
    obj3 = {};
    const items9 = [tmp4.content, contentStyles];
    obj3.style = items9;
    let tmp39 = null != header;
    if (tmp39) {
      obj4 = { style: tmp4.header, children: header };
      tmp39 = callback(transitionState, obj4);
    }
    const items10 = [tmp39, ];
    const obj5 = {};
    const items11 = [tmp4.body, bodyStyles];
    obj5.style = items11;
    obj5.children = children;
    items10[1] = callback(transitionState, obj5);
    obj3.children = items10;
    obj2.children = closure_17(transitionState, obj3);
    obj1.children = callback(backdropOpacity(dismissAccessibilityLabel[25]).LayerScope, obj2);
    const tmp27Result = tmp27(tmp24, obj1);
    let tmp46Result = tmp27Result;
    if (showGradient) {
      const obj6 = {};
      let tmp49 = null;
      if (null != tmp25) {
        tmp49 = tmp25;
      }
      obj6.gradient = tmp49;
      obj6.children = tmp27Result;
      tmp46Result = callback(backdropOpacity(dismissAccessibilityLabel[26]).ThemeContextProvider, obj6);
      const tmp46 = callback;
    }
    return tmp46Result;
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export const BottomSheet = forwardRefResult;
